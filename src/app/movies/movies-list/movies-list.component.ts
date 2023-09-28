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
  receivedData1!:any
 
  listMovies: MoviesInterface[] = [];
  fullyDataMovies: any = [];
  receiveData(data:any){
    this.receivedData1 = data;
  }
  constructor(private moviesServ: MoviesService, private results:SearchService) {
    console.log('receivedData1',this.receivedData1)
    
  }

  ngOnInit() {


    this.moviesServ.getAllMovies().subscribe((movie) => {
      console.log('movie', movie.results);
      let moviesTemp = movie;
      this.listMovies = moviesTemp.results;
    });
  

  }

ngOnChange(){
  if(this.receivedData1){

    this.results.getSearchResults(this.receivedData1).subscribe((data)=>{
      this.myresult=data
      this.myresult=this.myresult.results
    
      
      
      
      })
  
  }
  console.log('myreulst:  ',this.myresult)
}


}
