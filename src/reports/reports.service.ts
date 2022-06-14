import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportsService {
  create(createReportDto: CreateReportDto) {
    return 'This action adds a new report';
  }

  findAll() {
    return getReports();
  }

  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: number) {
    return `This action removes a #${id} report`;
  }
}

function getReports() {
  return [
    {
      month: "April 2022",
      totalIncome: 2000 * 1000,
      financedTrees: 1000 * 1000,
      items: [
        { key: "trees", value: 1000 },
        { key: "green-investments", value: 250 },
        { key: "taxes-and-social-security", value: 200 },
        { key: "spreading the word", value: 100 },
        { key: "operational-costs", value: 500 },
      ],
      countries: [
        { key: "brazil", value: 10 },
        { key: "kenya", value: 11 },
        { key: "tanzania", value: 12 },
        { key: "rwanda", value: 13 },
        { key: "mexico", value: 14 },
        { key: "thailand", value: 15 },
      ],
    },
    {
      month: "March 2022",
      totalIncome: 2000 * 100,
      financedTrees: 1000 * 100,
      items: [
        { key: "trees", value: 400 },
        { key: "green-investments", value: 25 },
        { key: "taxes-and-social-security", value: 20 },
        { key: "spreading the word", value: 10 },
        { key: "operational-costs", value: 50 },
      ],
      countries: [
        { key: "brazil", value: 1 },
        { key: "kenya", value: 2 },
        { key: "tanzania", value: 3 },
        { key: "rwanda", value: 4 },
        { key: "mexico", value: 5 },
        { key: "thailand", value: 6 },
      ],
    },
    {
      month: "February 2022",
      totalIncome: 2000 * 1000,
      financedTrees: 1000 * 1000,
      items: [
        { key: "trees", value: 1000 },
        { key: "green-investments", value: 250 },
        { key: "taxes-and-social-security", value: 200 },
        { key: "spreading the word", value: 100 },
        { key: "operational-costs", value: 500 },
      ],
      countries: [
        { key: "brazil", value: 10 },
        { key: "kenya", value: 11 },
        { key: "tanzania", value: 12 },
        { key: "rwanda", value: 13 },
        { key: "mexico", value: 14 },
        { key: "thailand", value: 15 },
      ],
    },
  ];
}
