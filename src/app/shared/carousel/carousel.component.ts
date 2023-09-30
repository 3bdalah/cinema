import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesInterface } from 'src/app/movies/movies-interface';
import { MoviesService } from 'src/app/movies/movies.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() moviesList!: MoviesInterface[];
  constructor(private _Router: Router, private _MoviesService: MoviesService) {}
  openDetailes(idMovie: number) {
    this._Router.navigate(['movie', idMovie]);
    this._MoviesService.getfullyDataMovie(idMovie);
  }

  customOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
}
