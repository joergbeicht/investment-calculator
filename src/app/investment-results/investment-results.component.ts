import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, OnChanges } from '@angular/core';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent implements OnChanges {
  // annualData = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[]>();

  // @Input() annualData? :{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[]

  private investmentService = inject(InvestmentService);

  // get annualData() {
  //   return this.investmentService.annualData;
  // }

  annualData = computed(() => this.investmentService.annualData());
  // annualData = this.investmentService.annualData.asReadonly();

  ngOnChanges(): void {
    
  }

}
