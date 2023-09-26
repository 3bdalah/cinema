import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
