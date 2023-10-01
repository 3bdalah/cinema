import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signedInFlag = new BehaviorSubject<boolean>(false);
  private currentUser=new BehaviorSubject<string>('');
  private users: { email: string, password: string }[] = [
    { email: "default@user.com", password: "12345" }
  ];

  constructor() {
    // Initialize the signed-in flag based on whether there's a user initially
  }

  // Sign-up function to store data in the array
  signUp(email: string, password: string) {
    if(email&&password){
    const userExists = this.users.some(user => user.email === email);

    if (!userExists) {
      // Add the user to the array
      this.users.push({ email, password });
      console.log('signed up successfully from service')
      return true
    } else {
      console.log('signup failed user exist from service')
      return false

      // Handle the case where the user already exists (you can add error handling here)
    }
  }
  else{
    console.log('either username or password is empty from service')
    return false
  }
  }

  // Sign-in function to compare with stored data
  signIn(email: string, password: string) {
    const user = this.users.find(user => user.email === email && user.password === password);

    if (user) {
      this.setSignInFlag(true)
      this.setCurrentUserEmail(user.email)
      console.log('signed in successfully from service')
      return true
      
    } else {
      this.setSignInFlag(false)
      console.log("failed to sign in, user doesn't exist from service")
      return false
    }
  }

  signOut() {
    this.setSignInFlag(false)
  }



  // Get the current user's email
  getCurrentUserEmail(): Observable<string | null> {
    return this.currentUser.asObservable();
  }

 setCurrentUserEmail(newval:string){
    this.currentUser.next(newval);
  }

  setSignInFlag(newval:boolean){
    this.signedInFlag.next(newval)
  }
  getSignInFlag(){

    return this.signedInFlag.asObservable()
  }

}
