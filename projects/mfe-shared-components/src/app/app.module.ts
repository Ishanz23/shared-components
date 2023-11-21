import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedComponentsModule } from '../../../shared-components/src/public-api';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [AppComponent, DynamicComponent],
  imports: [BrowserModule, SharedComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
