import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating?: number; // Current rating value
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>(); // Event emitted when rating changes

  setRating(rating: number): void {
    if (this.rating !== undefined) {
      this.rating = rating;
      this.ratingChange.emit(rating);
    }
  }

}
