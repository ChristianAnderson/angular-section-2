import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ɵangular_packages_forms_forms_w, FormBuilder } from '@angular/forms';
import { MustMatch } from './helpers/helper.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-todo by Christian App';
  registerForm : FormGroup;
   
  constructor(private formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      //question here regarding, the way we put Validators.required or Validator.method()
      confirmPassword: ['', Validators.required]
      }, {
        validator:MustMatch('password', 'confirmPassword')
      }
    );
  }

  // Shortname for easy access from the form
  // get f() { return this.registerForm.controls; }
  // question here, y this is not working as expect 

  onSubmit(registerForm) {
    // TODO: Use EventEmitter with form value
    console.warn(registerForm.value);
    console.log(registerForm);

  }
}
