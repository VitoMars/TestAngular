import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9,10}$')]),
    customField: new FormControl('', [Validators.required, this.customValidator(5)])
  });

  customValidator(minLength: number) {
    return (control: FormControl): { [key: string]: any } | null => {

      const value: string = control.value;
  
      if (value.length < minLength) {
        return { 'customError': { requiredLength: minLength, actualLength: value.length } };
      }
  
      return null;
    };
  }


  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      alert("Il Form è invalido. Controlla i campi.");
    }
  }
}
