import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { WatchListModule } from '../watch-list/watch-list.module';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    NotFoundComponent,
    CarouselComponent,
  ],
  imports: [CommonModule, AppRoutingModule, CarouselModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    NotFoundComponent,
    CarouselComponent,
  ],
})
export class SharedModule {}
