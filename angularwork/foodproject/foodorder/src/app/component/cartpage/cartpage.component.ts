import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { FoodService } from 'src/app/service/food/food.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService){
    

    this.setCart();
  }
  
  ngOnInit(): void {
    
  }

  setCart(){
    this.cart=this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString :string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }

}
