import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  successMessage!:string

  constructor(private fb: FormBuilder, private auth:AuthService, private router:Router) {
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  
  }



  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login submission, e.g., send data to the server
      const formData = this.loginForm.value;
      const email = formData.email;
      const password = formData.password;
      console.log('Email:', email);
      console.log('Password:', password);
      if(this.auth.signIn(email,password)){
        this.successMessage = 'success';
        setTimeout(() => {
          this.router.navigate(['']);
        }, 3000);
      }else{
        this.successMessage = 'user incorrect';
      }
      
      console.log(this.loginForm);
    }
  }
}

