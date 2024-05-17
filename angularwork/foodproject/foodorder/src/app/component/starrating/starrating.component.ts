import {  Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent {

  @Input() rating?: number; // Current rating value
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>(); // Event emitted when rating changes



  setRating(rating: number): void {
    if (this.rating !== undefined) {
      this.rating = rating;
      this.ratingChange.emit(rating);
    }
  }

  // getFullStars(): number {
  //   return Math.floor(this.rating || 0);
  // }

  // isHalfStar(): boolean {
  //   const roundedRating = Math.round((this.rating || 0) * 10) / 10;
  //   return this.rating !== undefined && roundedRating % 1 !== 0;
  // }

  // setRating(rating: number): void {
  //   if (this.rating !== undefined) {
  //     this.rating = rating;
  //     this.ratingChange.emit(rating);
  //   }
  // }
}
