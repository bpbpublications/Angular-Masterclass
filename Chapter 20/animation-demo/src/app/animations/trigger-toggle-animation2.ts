import { trigger, transition, useAnimation } from '@angular/animations';
import { setLeftAnimation } from './set-left-animation';

export const triggerToggleAnimation = trigger('toggle', [
  transition('off => on', [
    useAnimation(setLeftAnimation, {
      params: {
        left: '32px',
        duration: '0.3s',
        easing: 'cubic-bezier(0.18, 0.89, 0.35, 1.15)'
      }
    })
  ])
]);