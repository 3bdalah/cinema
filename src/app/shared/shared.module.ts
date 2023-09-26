import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports:[HeaderComponent,
    FooterComponent,
    PaginationComponent,
    NotFoundComponent]
})
export class SharedModule { }
