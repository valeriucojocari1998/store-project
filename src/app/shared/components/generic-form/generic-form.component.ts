import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {

  checkout = new FormGroup ({
    emailForm: new FormControl('', Validators.required),
    nameForm: new FormControl('', Validators.required),
    addressForm: new FormControl('', Validators.required),
    cityForm: new FormControl('', Validators.required)
  }, Validators.required)

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let x = 'The product has been shipped to ' + this.checkout.value.addressForm + ', ' + this.checkout.value.cityForm;
    window.alert(x);
  }
}
