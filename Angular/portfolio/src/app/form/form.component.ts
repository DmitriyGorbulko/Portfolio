// form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    companyName: '',
    interviewDate: '',
    proposedPosition: '',
    email: '',
    companyWebsite: ''
  };

  handleChange(event: Event, name: string) {
    const value = (event.target as HTMLInputElement).value;
    this.formData = { ...this.formData, [name]: value } as typeof this.formData;
  }

  handleReset() {
    this.formData = {
      companyName: '',
      interviewDate: '',
      proposedPosition: '',
      email: '',
      companyWebsite: ''
    };
  }
}