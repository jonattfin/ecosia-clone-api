import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country, Investment, Report } from 'src/_shared/entities';
import { Repository } from 'typeorm';
import _ from 'lodash';

import { CreateReportDto } from './dto/create-report.dto';
import { KeyValuePair, ReportDto } from './dto/report-dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private reportsRepository: Repository<Report>,
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
    @InjectRepository(Investment)
    private investmentsRepository: Repository<Investment>,
  ) {}

  create(_createReportDto: CreateReportDto) {
    return 'This action adds a new report';
  }

  async findAll(): Promise<ReportDto[]> {
    const reports = await this.reportsRepository.find({
      relations: {
        reportToCountries: true,
        reportToInvestments: true,
      },
    });

    return this.mapInvestmentsAndCountries(reports);
  }

  async findOne(id: number): Promise<ReportDto> {
    const report = await this.reportsRepository.findOne({
      where: { id },
      relations: {
        reportToCountries: true,
        reportToInvestments: true,
      },
    });

    return _.head(await this.mapInvestmentsAndCountries([report]));
  }

  update(id: number, _updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  async remove(id: number): Promise<void> {
    await this.reportsRepository.delete(id);
  }

  private async mapInvestmentsAndCountries(
    reports: Report[],
  ): Promise<ReportDto[]> {
    const allCountries = await this.countriesRepository.find();
    const allInvestments = await this.investmentsRepository.find();

    return reports.map((report) => {
      const investments: KeyValuePair[] = [];
      report.reportToInvestments.forEach((r) => {
        const name = allInvestments.find((i) => i.id === r.investmentId)?.name;
        investments.push(new KeyValuePair(name, r.value));
      });

      const countries: KeyValuePair[] = [];
      report.reportToCountries.forEach((r) => {
        const name = allCountries.find((c) => c.id === r.countryId)?.name;
        countries.push(new KeyValuePair(name, r.value));
      });

      return new ReportDto(report.month, report.year, investments, countries);
    });
  }
}
