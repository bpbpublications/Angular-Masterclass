import { OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Directive } from '@angular/core';

@Directive({
  selector: '[appLifecycle]',
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // Define a counter to track the number of times each hook is called
  counter: number = 0;

  // Implement the constructor hook
  constructor() {
    this.counter++;
    console.log('constructor called', this.counter);
  }

  // Implement the ngOnChanges hook
  ngOnChanges() {
    this.counter++;
    console.log('ngOnChanges called', this.counter);
  }

  // Implement the ngOnInit hook
  ngOnInit() {
    this.counter++;
    console.log('ngOnInit called', this.counter);
  }

  // Implement the ngDoCheck hook
  ngDoCheck() {
    this.counter++;
    console.log('ngDoCheck called', this.counter);
  }

  // Implement the ngAfterContentInit hook
  ngAfterContentInit() {
    this.counter++;
    console.log('ngAfterContentInit called', this.counter);
  }

  // Implement the ngAfterContentChecked hook
  ngAfterContentChecked() {
    this.counter++;
    console.log('ngAfterContentChecked called', this.counter);
  }

  // Implement the ngAfterViewInit hook
  ngAfterViewInit() {
    this.counter++;
    console.log('ngAfterViewInit called', this.counter);
  }

  // Implement the ngAfterViewChecked hook
  ngAfterViewChecked() {
    this.counter++;
    console.log('ngAfterViewChecked called', this.counter);
  }

  // Implement the ngOnDestroy hook
  ngOnDestroy() {
    this.counter++;
    console.log('ngOnDestroy called', this.counter);
  }
}
