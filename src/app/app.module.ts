import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { MoviesModule } from './movies/movies.module';
<<<<<<< HEAD
=======
import { WatchListModule } from './watch-list/watch-list.module';
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MoviesModule,
<<<<<<< HEAD
=======
    WatchListModule,
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
