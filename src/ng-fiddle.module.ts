import { NgModule } from '@angular/core';
import { NgFiddleComponent } from './components';
import { NgFiddleService } from './services';
import { CustomSafePipe } from './pipes';
@NgModule({
  providers: [
    NgFiddleService,
  ],
  declarations: [
    NgFiddleComponent,
    CustomSafePipe
  ],
  exports: [
    NgFiddleComponent,
  ]
})
export class NgFiddleModule {
}
