import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchApi:string='https://api.themoviedb.org/3/search/movie?api_key='
  private api_Key = 'fd1abe0fb535494df40c06c72320b913';
  private movieName!:string
  private setMovie=new BehaviorSubject<string>('');



  constructor(private http :HttpClient ) { }


getSearchResults(movieName:string){
return this.http.get(this.searchApi+this.api_Key+'&query='+this.movieName)

}

setSearchResults(newval:any){
this.setMovie.next(newval)

}


}
