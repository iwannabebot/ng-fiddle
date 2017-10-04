import { NgModule } from '@angular/core';
import { NgFiddleComponent } from './components';
import { NgFiddleService } from './services';
@NgModule({
  providers: [
    NgFiddleService
  ],
  declarations: [
    NgFiddleComponent
  ],
  exports: [
    NgFiddleComponent
  ]
})
export class NgFiddleModule {
}
