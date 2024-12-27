import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div>{{ cartoonText }}</div>
    <img [src]="cartoonImg" [alt]="cartoonImgAlt" />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  cartoonText = 'Cartoon';
  cartoonImg = undefined;
  cartoonImgAlt = 'Cartoon Image';

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    console.log('AppComponent ngOnInit: Fetching xkcd cartoon')
    this.http.get('https://xkcd.com/info.0.json')
      .subscribe({
        next: (cartoon: any) => {
          this.cartoonText = cartoon['safe_title'];
          this.cartoonImg = cartoon['img'];
          this.cartoonImgAlt = cartoon['alt'];
        }, 
        error: (err) => {
          console.log(err);
        }
      });
  }
}