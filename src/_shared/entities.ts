import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  scope: string;

  @Column()
  desc: string;

  @Column()
  imageUrl: string;

  @ManyToMany(() => Tag, (tag) => tag.projects)
  tags: Tag[];
}

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @ManyToMany(() => Project, (project) => project.tags, {
    cascade: true,
  })
  @JoinTable()
  projects: Project[];
}

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  month: string;

  @OneToMany(() => ReportToInvestment, (item) => item.report)
  reportToInvestments: ReportToInvestment[];

  @OneToMany(() => ReportToCountry, (item) => item.report)
  reportToCountries: ReportToCountry[];
}

@Entity()
export class Investment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ReportToInvestment, (item) => item.report)
  public investmentToReport!: ReportToInvestment[];
}

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ReportToCountry, (item) => item.report)
  public countryToReport!: ReportToCountry[];
}

@Entity()
export class ReportToInvestment {
  @PrimaryGeneratedColumn()
  public reportToInvestmentId!: number;

  @Column()
  public reportId!: number;

  @Column()
  public investmentId!: number;

  @Column()
  public value!: number;

  @ManyToOne(() => Report, (report) => report.reportToInvestments)
  public report!: Report;

  @ManyToOne(() => Investment, (investment) => investment.investmentToReport)
  public investment!: Investment;
}

@Entity()
export class ReportToCountry {
  @PrimaryGeneratedColumn()
  public reportToCountryId!: number;

  @Column()
  public reportId!: number;

  @Column()
  public countryId!: number;

  @Column()
  public value!: number;

  @ManyToOne(() => Report, (report) => report.reportToCountries)
  public report!: Report;

  @ManyToOne(() => Country, (country) => country.countryToReport)
  public country!: Country;
}
