import {Component}       from 'angular2/core';
import {SalesTaxService} from './sales-tax.service';
import {TaxRateService}  from './tax-rate.service';

@Component({
  selector: 'sales-tax',
  template: `
    <h2>Sales Tax Calculator</h2>
    Amount: <input #amountBox (change)="0">
    
    <div *ngIf="amountBox.value">
    The sales tax is
     {{ getTax(amountBox.value) | currency:'USD':true:'1.2-2' }}
    </div>
  `,
  providers: [SalesTaxService, TaxRateService]
})
/*
export class SalesTaxComponent { ... }
*/
export class SalesTaxComponent {
  constructor(private _salesTaxService: SalesTaxService) { }

  getTax(value: string | number) {
    return this._salesTaxService.getVAT(value);
  }
}
