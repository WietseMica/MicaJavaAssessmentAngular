export class Calculator {

  constructor(
    public id: bigint|null,
    public firstNumber: number,
    public secondNumber: number,
    public symbol: string,
    public result: number
  ) {
  }

}
