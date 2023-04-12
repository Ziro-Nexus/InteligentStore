import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderisComponent } from './Components/headeris/headeris.component';
import { ContainerComponent } from './Components/container/container.component';
import { LogInComponent } from './Components/forms/log-in/log-in.component';
import { SigUpComponent } from './Components/forms/sig-up/sig-up.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    HeaderisComponent,
    ContainerComponent,
    LogInComponent,
    SigUpComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
