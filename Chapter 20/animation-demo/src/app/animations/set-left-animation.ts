import { animation, style, animate } from '@angular/animations';

export const setLeftAnimation = animation([
  style({
    left: '{{ left }}'
  }),
  animate('{{duration}} {{easing}}')
]);