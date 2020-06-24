import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gesture-slider',
  templateUrl: './gesture-slider.component.html',
  styleUrls: ['./gesture-slider.component.scss']
})
export class GestureSliderComponent implements OnInit {
  slides = 0;
  constructor() { }

  ngOnInit(): void {
  }


  onSwipeRight(event, data) {
    console.log("event", event)
    this.slides = this.slides + data

    if (this.slides == 2) {
      this.slides = 0
    }
  }

  onSwipeLeft(event, data) {
    console.log("event", event)
    this.slides = this.slides - data

    if (this.slides == -1) {
      this.slides = 0
    }
  }

}
