import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  form: FormGroup;
  formResult: {name: string, street: string, zip: number, city: string} ;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: 'Marta',
      street: '',
      zip: '',
      city: '',
    });
  }


  onSubmit() {
    console.log('saved', this.form.value);
    this.formResult = this.form.value;
  }
}
