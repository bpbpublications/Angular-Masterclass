import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPriceDirective } from './directives/highlight-price.directive';
import { ConvertToInrPipe } from './pipes/convert-to-inr.pipe';



@NgModule({
  declarations: [
    HighlightPriceDirective,
    ConvertToInrPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightPriceDirective,
    ConvertToInrPipe
  ]
})
export class SharedModule { }
