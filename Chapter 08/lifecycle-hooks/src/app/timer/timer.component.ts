import { Component, OnInit } from '@angular/core';
import { DestroyRef } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <p>Timer: {{timer}}</p>
  `,
})
export class TimerComponent implements OnInit {
  timer: number = 0;
  intervalId: any;

  constructor(destroyRef: DestroyRef) {
    // Register a function that clears the interval function
    // when the component is destroyed
    destroyRef.onDestroy(() => {
      console.log('DestroyRef called')
      clearInterval(this.intervalId);
    });
  }

  ngOnInit() {
    // Set an interval function that increments the timer every second
    this.intervalId = setInterval(() => {
      this.timer++;
      console.log('Timer:', this.timer);
    }, 1000);
  }
}
