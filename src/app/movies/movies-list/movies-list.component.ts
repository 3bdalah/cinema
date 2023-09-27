import { Component } from '@angular/core';
import { MoviesInterface } from '../movies-interface';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  listMovies: MoviesInterface[] = [];
  fullyDataMovies: any = [];
  constructor(private moviesServ: MoviesService) {}
  ngOnInit() {
    this.moviesServ.getAllMovies().subscribe((movie) => {
      console.log('movie', movie.results);
      let moviesTemp = movie;
      this.listMovies = moviesTemp.results;
    });
  }
}
