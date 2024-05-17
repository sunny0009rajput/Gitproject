import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paymentgateway';
  buttonColor="black";
  buttonType="buy";
  isCustomSize=250;
  buttonHeight=50;
  isTop=window === window.top;
  paymentRequest={
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      {type:"CARD",
      parameters:{
        allowedPaymentMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
        allowedCardNetworks:["AMEX","MASTER","VISA"]
      },
      tokenizationSpecification:{
        type:"PAYMENT_GATEWAY",
        parameters:{
          gateway:"example",
          gatewayMerchantId:"exampleGatewayMerchant"
        }
      }
    }

    ],
    merchantInfo:{
      merchantId:"123456789",
      merchantName:"demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      tatalPrice:"100.00",
      currencyCode:"USD",
      countryCode:"US"
    }

  };
  onLoadPaymentData(event:any):void{
    console.log("Load Payment data by testycodeiz ",event.detail)
  }
}
