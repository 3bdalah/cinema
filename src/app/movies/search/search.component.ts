import { Component, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 searchFlag:boolean=false;
  movieName:string='';
  myresult!:any;

constructor(private search: SearchService){}



reset(){
  this.searchFlag=false
  this.myresult=[]
  this.search.setSearchResults(this.myresult)
}

sendResultToService(movieName:string) {
    // this.dataEvent.emit(movieName);
    this.searchFlag=true
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