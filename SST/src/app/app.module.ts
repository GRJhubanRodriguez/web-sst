import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccidentalidadComponent } from './Input/accidentalidad/accidentalidad.component';
import { NavComponent } from './nav/nav/nav.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './nav/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AccidentalidadComponent,
    NavComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
