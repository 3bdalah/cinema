import { Component } from '@angular/core';
import { WishListService } from 'src/app/watch-list/wish-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn: boolean = true;
  lengthMoviesWishList: number = 0;

  constructor(private _WishListService: WishListService) {}
  ngOnInit() {
    this._WishListService.getAllMoviesAtWishList().subscribe((movie) => {
      console.log('all movies at wish list at ng on init', movie);
      this.lengthMoviesWishList = movie.length;
    });
  }
  logout() {
    this.isLoggedIn = false;
    console.log(this.isLoggedIn);
  }
}
