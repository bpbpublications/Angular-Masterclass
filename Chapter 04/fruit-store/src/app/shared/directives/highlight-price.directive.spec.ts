import { HighlightPriceDirective } from './highlight-price.directive';

import { ElementRef } from '@angular/core';
describe('HighlightPriceDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightPriceDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
