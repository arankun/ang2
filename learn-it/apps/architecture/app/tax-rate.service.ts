import {Injectable} from 'angular2/core';

@Injectable()
export class TaxRateService {
	getRate(rateName: string) { return 0.10; } // always 10% everywhere
}