import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  constructor(private fs:FoodService){}
  @Input()
  foodPagetags?:string[];

  // css part 
  @Input()
  justifyContent:string='center'
  
  tags?:Tag[] =[];
  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags=this.fs.getAllTag();
  }

}
