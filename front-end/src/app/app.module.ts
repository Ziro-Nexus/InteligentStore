import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderisComponent } from './Components/headeris/headeris.component';
import { ContainerComponent } from './Components/container/container.component';
import { LrFormsComponent } from './Components/lr-forms/lr-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderisComponent,
    ContainerComponent,
    LrFormsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
