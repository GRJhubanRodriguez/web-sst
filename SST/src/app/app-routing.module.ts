import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AccidentalidadComponent} from './Input/accidentalidad/accidentalidad.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'accidentalidad', component: AccidentalidadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
