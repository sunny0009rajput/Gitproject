import { CartItem } from "./CartItem";

export class Cart{
    
    items:CartItem[] =[];
    item: any;
  
   

    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item => {
            totalPrice += this.item.price;         
        });
        return totalPrice;
    }
}