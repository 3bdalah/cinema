import { Component, EventEmitter, Output} from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() dataEvent = new EventEmitter<string>();
  movieName!:string;
  myresult!:any;

constructor(private search: SearchService){}


 

  emitData() {
    this.dataEvent.emit(this.movieName);
  }



// this.movieName=this.movieName.toLowerCase().trim()
// this. search.getSearchResults(this.movieName).subscribe((result)=>{
// this.myresult=result
// this.search.setSearchResults(this.myresult)
// console.log('search results:  ',this.myresult)

// })




}
