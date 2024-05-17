import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id ==id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    if(tag == 'ALL')
    return this.getAll();
    else
    return this.getAll().filter(food=> food.tags?.includes(tag));

    // you can write this statement in simple type 

  }

  getAllTag():Tag[]{
    return[
      {name:'ALL',count:14},
      {name:'FastFood',count:4},
      {name:'Pizza',count:1},
      {name:'Lunch',count:5},
      {name:'Burger',count:1},
      {name:'Fruits',count:2},
      {name:'Breakfast',count:5},
    ];
  }

  getAll():Foods[]{
    return[
      {
        id:1,
        name:'pizza pepperoni',
        price:10,
        cookTime:'20-30',
        favourite:true,
        origins:['indian'],
        star:4.0,
        imageUrl:'/assets/food1.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:2,
        name:'orange',
        price:5,
        cookTime:'05-10',
        favourite:false,
        origins:['indian'],
        star:4.0,
        imageUrl:'/assets/food2.jpg',
        tags:['Breakfast','Fruits'],
      },

      {
        id:3,
        name:'strawbery',
        price:10,
        cookTime:'05-10',
        favourite:true,
        origins:['indian'],
        star:4.6,
        imageUrl:'/assets/food3.jpg',
        tags:['Breakfast','Fruits'],
      },
      {
        id:4,
        name:'chapati',
        price:20,
        cookTime:'10-30',
        favourite:false,
        origins:['indian'],
        star:4.4,
        imageUrl:'/assets/food4.jpg',
        tags:['Breakfast','Fruits'],
      },
      {
        id:5,
        name:'burger',
        price:5,
        cookTime:'05-10',
        favourite:true,
        origins:['indian'],
        star:5.0,
        imageUrl:'/assets/food5.jpg',
        tags:['Breakfast','Fruits','Burger','FastFood'],
      },
      {
        id:6,
        name:'pizza',
        price:5,
        cookTime:'15-30',
        favourite:false,
        origins:['indian'],
        star:4.2,
        imageUrl:'/assets/food6.jpg',
        tags:['Breakfast','Fruits','FastFood'],
      },
      {
        id:7,
        name:'cookies',
        price:5,
        cookTime:'05-10',
        favourite:true,
        origins:['indian'],
        star:3.0,
        imageUrl:'/assets/food7.jpg',
        tags:['Breakfast','Fruits'],
      },
      {
        id:8,
        name:'bread',
        price:5,
        cookTime:'05-10',
        favourite:true,
        origins:['indian'],
        star:4.5,
        imageUrl:'/assets/food8.jpg',
        tags:['Breakfast','Fruits'],
      },
      
    ];
  };
}
