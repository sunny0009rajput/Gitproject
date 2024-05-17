import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { Foods } from 'src/app/shared/models/food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods:Foods[]=[];
  // rating3: number;
  constructor(private fs:FoodService,private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.foods=this.fs.getAll().filter(food =>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      // working for tags
      else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag'])
      else{
        this.foods=this.fs.getAll();
      }
    })
    
  }

  


}
