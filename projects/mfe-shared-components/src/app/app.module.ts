import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedComponentsModule } from '../../../shared-components/src/public-api';
import { DynamicComponent } from './dynamic/dynamic.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedComponentsModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ce = createCustomElement(DynamicComponent, {
      injector: this.injector,
    });
    console.log(ce);
    customElements.define('shared-dynamic', ce);
  }
}
