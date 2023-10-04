import { Component } from '@angular/core';
import { MoviesInterface } from '../movies-interface';
import { MoviesService } from '../movies.service';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  listMovies: MoviesInterface[] = [];
  pageNumbers: number[] = [];
  searchFlag!: boolean;
  myresult!: any;
  pageNum: number = 1;

 
  constructor(
    private _MoviesService: MoviesService,
    private results: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Initialize the page number from the URL query parameter
    this.route.queryParams.subscribe((params) => {
      this.pageNum = parseInt(params['page'], 10) || 1;
      this.loadMovies(this.pageNum);
    });

    this.pageNumbers = new Array(15).fill('').map((item, index) => index);
    this.results.setSearchFlag(false);

    this.results.getSearchFlag().subscribe((flag) => {
      this.searchFlag = flag;
      if (this.searchFlag) {
        this.loadMovies();
      }
    });
  }

  ngAfterViewInit() {
    this.results.getStoredSearchResults().subscribe((movie) => {
      this.myresult = movie;
      this.myresult = this.myresult.results;

      if (!this.searchFlag) {
        this.loadMovies(1);
      }
    });
  }

  loadMovies(page_number: number = 1) {
    this._MoviesService
      .getAllMoviesByPagination(this.pageNum)
      .subscribe((movie) => {
        this.listMovies = movie.results;
      });
  }

  handlePageNum(pageNumber: number) {
    // Navigate to the same route with the 'page' query parameter
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: pageNumber },
      queryParamsHandling: 'merge',
    });
  }
}
