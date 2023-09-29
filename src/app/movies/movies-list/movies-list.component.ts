import { Component } from '@angular/core';
import { MoviesInterface } from '../movies-interface';
import { MoviesService } from '../movies.service';
<<<<<<< HEAD
import { SearchService } from '../search.service';
=======
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  listMovies: MoviesInterface[] = [];
  fullyDataMovies: any = [];
  pageNumbers: number[] = [];
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit() {
    this.pageNumbers = new Array(15).fill('').map((item, index) => index);
    this._MoviesService.getAllMoviesByPagination(1).subscribe((movies) => {

<<<<<<< HEAD
  myresult!:any
  receivedData1:any =''
  listMovies: MoviesInterface[] = [];
  fullyDataMovies: any = [];
  searchFlag!:boolean;
  constructor(private moviesServ: MoviesService, private results:SearchService) {


    console.log('receivedData1',this.receivedData1)

  
    
  }
  
  ngOnInit() {
    
    this.results.setSearchFlag(false)
    this.moviesServ.getAllMovies().subscribe((movie) => {
      console.log('movie', movie.results);
      let moviesTemp = movie;
      this.listMovies = moviesTemp.results;
    });
    
   
this.results.getSearchFlag().subscribe((flag)=>{
this.searchFlag=flag
console.log('searchFlag onInit: ',this.searchFlag)
})
    
  }

  ngAfterViewInit(){

  this.results.getStoredSearchResults().subscribe((movie)=>{
    this.myresult=movie
    this.myresult=this.myresult.results


    console.log('searchFlag AfterViewInit: ',this.searchFlag)
    console.log('getStoredSearchResults in Parent: ', this.myresult)
    
    })
}


=======
      this.listMovies = movies.results;
    });
  }

  handlePassNumPage(numPage: number) {
    this._MoviesService
      .getAllMoviesByPagination(numPage)
      .subscribe((movies) => {
        this.listMovies = movies.results;
      });
  }
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4
}
