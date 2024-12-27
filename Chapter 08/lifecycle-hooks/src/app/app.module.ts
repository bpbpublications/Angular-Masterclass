import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { CustomPanelComponent } from './custom-panel/custom-panel.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TimerComponent } from './timer/timer.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ListComponent,
    UserComponent,
    CustomPanelComponent,
    ParentComponent,
    ChildComponent,
    TimerComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
