export class ReportDto {
  month!: string;
  investments!: KeyValuePair[];
  countries!: KeyValuePair[];

  constructor(
    month: string,
    investments: KeyValuePair[],
    countries: KeyValuePair[],
  ) {
    this.month = month;
    this.investments = investments;
    this.countries = countries;
  }
}

export class KeyValuePair {
  name!: string;
  value!: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}
