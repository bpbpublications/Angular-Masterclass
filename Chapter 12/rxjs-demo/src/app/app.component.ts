import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncSubject, BehaviorSubject, Observable, Subject, concat, filter, from, interval, map, merge, of, reduce, take } from 'rxjs';
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // this.basicObservable();
    // this.asyncObservable();
    // this.ofOperator();
    // this.fromOperator();
    // this.mapOperator();
    // this.filterOperator();
    // this.pipeOperators();
    // this.mergeOperators();
    // this.concatOperators();
    // this.basicSubject();
    // this.behaviorSubject();
    // this.asyncSubject();
  }


  private basicObservable() {
    const messages$ = new Observable(subscriber => {
      subscriber.next('This message is emitted by the observable');
      subscriber.next('This is the 2nd message');
      subscriber.next('This is the last message before it completes');
      subscriber.complete();
    });

    // messages$.subscribe(x => console.log(x));
    messages$.subscribe({
      next: value => console.log('Next:', value),
      error: err => console.error('Error:', err),
      complete: () => console.log('Completed')
    });
  }

  private asyncObservable() {
    const numbers$ = new Observable(subscriber => {
      try {
        subscriber.next(100);
        subscriber.next(200);
        setTimeout(() => {
          subscriber.next(300);
          subscriber.complete();
        }, 1000);
      } catch (error) {
        subscriber.error(error);
      }
    });

    console.log("Start");
    numbers$.subscribe(x => console.log(x));
    console.log("End");

    console.log("Start");
    numbers$.subscribe(x => console.log(x));
    console.log("End");
  }

  private fromOperator() {
    const numbers3$ = from([100, 200, 300]);
    numbers3$.subscribe(x => console.log(x));
  }

  private ofOperator() {
    const numbers2$ = of(100, 200, 300);
    numbers2$.subscribe(x => console.log(x));
  }

  private mapOperator() {
    of(100, 200, 300)
      .pipe(map(x => x / 100))
      .subscribe(x => console.log(`New value: ${x}`));
  }

  private filterOperator() {
    of(100, 200, 300)
      .pipe(filter(x => x > 150))
      .subscribe(x => console.log(x));
  }

  private pipeOperators() {
    of(1, 2, 3, 4, 5, 6, 7)
      .pipe(map(x => x * x),
        filter(x => x % 2 === 0),
        take(3),
        reduce((n, x) => n + x))
      .subscribe(x => console.log(x));
  }

  private mergeOperators() {
    const odd$ = interval(1000).pipe(filter(x => x % 2 === 1), take(3));
    const even$ = interval(500).pipe(filter(x => x % 2 === 0), take(3));
    const alphabets$ = of('a', 'b', 'c');
    const merged$ = merge(odd$, even$, alphabets$);
    merged$.subscribe(x => console.log(x));
  }

  private concatOperators() {
    const odd$ = interval(1000).pipe(filter(x => x % 2 === 1), take(3));
    const even$ = interval(500).pipe(filter(x => x % 2 === 0), take(3));
    const alphabets$ = of('a', 'b', 'c');
    const concat$ = concat(odd$, even$, alphabets$);
    concat$.subscribe(x => console.log(x));
  }

  private basicSubject() {
    const subject = new Subject<number>();
    subject.subscribe(value => console.log('Subscriber 1:', value));
    subject.subscribe(value => console.log('Subscriber 2:', value));

    // Emit values
    subject.next(1);
    subject.next(2);
    subject.next(3);
  }

  private behaviorSubject() {
    const behaviorSubject = new BehaviorSubject<number>(0);
    behaviorSubject.subscribe(value => console.log('A:', value)); // Outputs: A: 0
    behaviorSubject.next(1);
    behaviorSubject.subscribe(value => console.log('B:', value)); // Outputs: B: 1
  }

  private asyncSubject() {
    const asyncSubject = new AsyncSubject<number>();
    asyncSubject.subscribe(value => console.log('Async:', value));
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.next(3);
    asyncSubject.complete();
  }

}
