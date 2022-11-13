import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {

  constructor() { }

  public getPayments(): Payment[] {
    return [
      {
        id:  72393,
        provider: "FinsoFacil",
        type: "FACTURAS",
        amount: 1000000,
      },
      {
        id:  72394,
        provider: "FinsoFacil",
        type: "FACTURAS",
        amount: 1000000,
      }
    ]
  }
}