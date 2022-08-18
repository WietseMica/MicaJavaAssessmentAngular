import {Component, OnInit} from '@angular/core';
import {Calculator} from "../calculator";

import {ApiService} from "../api/api.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent {

  history = {};
  calulator: Calculator = <Calculator>{};
  symbols = [
    {value: '+', viewValue: '+'},
    {value: '-', viewValue: '-'},
    {value: '*', viewValue: 'x'},
    {value: ':', viewValue: ':'},
  ];

  constructor(private service: ApiService) {

  }

  setSymbol(value = '+') {
    this.calulator.symbol = value;
  }

  onSubmit(): void {

    this.calulator.firstNumber = Number(this.calulator.firstNumber);
    this.calulator.secondNumber = Number(this.calulator.secondNumber);

    switch (this.calulator.symbol) {
      case '+':
        this.calulator.result = this.calulator.firstNumber + this.calulator.secondNumber;
        break
      case '-':
        this.calulator.result = this.calulator.firstNumber - this.calulator.secondNumber;
        break
      case '*':
        this.calulator.result = this.calulator.firstNumber * this.calulator.secondNumber;
        break
      case ':':
        this.calulator.result = this.calulator.firstNumber + this.calulator.secondNumber;
        break
      default:

        break;
    }

    this.service.addCalculation(this.calulator);
    this.service.getHistory()
      .subscribe(response => {
        this.history = response;
      });
  }

}
