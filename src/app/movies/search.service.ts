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
  private searchResults=new BehaviorSubject<string>('');
  private searchFlag = new BehaviorSubject<boolean>(false)



  constructor(private http :HttpClient ) { }


getSearchResults(movieNameParam:string){
  this.movieName=movieNameParam
return this.http.get(this.searchApi+this.api_Key+'&query='+movieNameParam)

}

setSearchResults(newval:any){
this.searchResults.next(newval)

}


getStoredSearchResults(){
  return this.searchResults.asObservable()
}



setSearchFlag(newval:boolean){
  this.searchFlag.next(newval)
}
getSearchFlag(){
 return this.searchFlag.asObservable()
}

}
