import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormCaracterComponent } from './components/form-caracter/form-caracter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [
    MainPageComponent,
    ListComponent,
    FormCaracterComponent
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    FormCaracterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
