import { Injectable, signal } from '@angular/core';
// type ist nicht notwendig, aber es macht klar dass es eine type Definition oder 
// ein interface ist!
import type { AnnualData, InvestmentInput } from '../investment-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    annualData = signal<AnnualData[] | undefined>(undefined);

    calculateInvestmentResults(
        data: InvestmentInput
      ) {
    
        const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
    
        const annualData = [];    
        let investmentValue = initialInvestment;
    
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
    
        this.annualData.set(annualData);
        // this.annualData = annualData;
        console.log('this.annualData', this.annualData);
      }
}
