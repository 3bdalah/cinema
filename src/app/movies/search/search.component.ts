import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movieName:string='';
  myresult!:any;

constructor(private search: SearchService){}



sendResultToService(movieName:string) {
    // this.dataEvent.emit(movieName);
    
    this.movieName=this.movieName.toLowerCase()
    this.movieName=this.movieName.trim()
    console.log('movie name"befor" in child: ',movieName)
    this. search.getSearchResults(this.movieName).subscribe((result)=>{
    this.myresult=result
    this.search.setSearchResults(this.myresult)
    console.log('search results in child:  ',this.myresult)


    console.log('movie name in child: ',movieName)
  }



// })


)}

}