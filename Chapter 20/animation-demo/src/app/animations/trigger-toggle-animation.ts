import { trigger, transition, state, style, animate } from '@angular/animations';

export const triggerToggleAnimation = trigger('toggle', [
  state('on', style({
    left: '32px'
  })),
  state('off', style({
    left: '4px'
  })),
  transition('on <=> off', animate('{{duration}} {{easing}}'), {
    params: {
      duration: '0.3s',
      easing: 'cubic-bezier(0.18, 0.89, 0.35, 1.15)'
    }
  })
]);