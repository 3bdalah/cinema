import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MoviesInterface } from '../movies-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movieAllDetailes!: any;
  moveiId!: number;
  constructor(
    private fullyDataMovie: MoviesService,
    private _ActivatRoute: ActivatedRoute,
   
  ) {}
  ngOnInit() {
    this.moveiId = this._ActivatRoute.snapshot.params['id'];
    this.fullyDataMovie
      .getfullyDataMovie(this.moveiId)
      .subscribe((dataMovie) => {
        this.movieAllDetailes = dataMovie;
      });
  }
}
