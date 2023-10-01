import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
successMessage!:string
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private auth:AuthService, private router: Router) {

    
    this.signupForm = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator // Bind the validator to the component instance
    });
  }


  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      // Mark the confirmPassword control as invalid
      if (control.get('confirmPassword')) {
        control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      }
    } else {
      // Reset the validity of the confirmPassword control
      if (control.get('confirmPassword')) {
        control.get('confirmPassword')?.setErrors(null);
      }
    }
  
    return null; // Return null to the form's errors
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value; // Get the form values
  
      // Access the email and password from the form data
      const email = formData.email;
      const password = formData.password;
  
      console.log('Email:', email);
      console.log('Password:', password);
  
      if (this.auth.signUp(email, password)) {
        this.successMessage = 'success';
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);
      } else {
        this.successMessage = 'user exists';
      }
    } else {
      console.log('invalid: ', this.signupForm);
    }
  }
  
}
