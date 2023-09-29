import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { MoviesModule } from './movies/movies.module';

import { WatchListModule } from './watch-list/watch-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MoviesModule,
    WatchListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
