import { Component } from '@angular/core';
import { MoviesInterface } from '../movies-interface';
import { MoviesService } from '../movies.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {

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


}
