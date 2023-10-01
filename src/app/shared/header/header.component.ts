import { Component } from '@angular/core';
import { WishListService } from 'src/app/watch-list/wish-list.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn!: boolean;
  lengthMoviesWishList: number = 0;

  constructor(private _WishListService: WishListService, private auth:AuthService) {}
  ngOnInit() {
    this.auth.getSignInFlag().subscribe((bool)=>{
      this.isLoggedIn=bool
    })




    this._WishListService.getAllMoviesAtWishList().subscribe((movie) => {
      console.log('all movies at wish list at ng on init', movie);
      this.lengthMoviesWishList = movie.length;
    });
  }
  logout() {
    this.auth.setSignInFlag(false)
    console.log(this.isLoggedIn);
  }
}
