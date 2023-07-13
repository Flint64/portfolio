import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  user_name: string;
  firstname: string = '';
  lastname: string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'user_name': new FormControl(''),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'subject': new FormControl('', Validators.required),
      'message': new FormControl('', Validators.required),
    });
  }

  changeFirst(target){
    this.firstname = target.value;
  }
  
  changeLast(target){
    this.lastname = target.value;
  }

  onSubmit(e: Event){
    if (!this.contactForm.valid){
      return;
    }
    
    let form = this.contactForm.controls;
   form.user_name.setValue(form.firstname.value + ' ' + form.lastname.value);
    emailjs.sendForm('service_8rhchzj', 'template_d31t2c1', e.target as HTMLFormElement, 'Y5c7ELKktXkuRBTds')
    .then((result: EmailJSResponseStatus) => {
      // console.log(result.text);
      this.contactForm.reset();
      window.alert("Email sent!");
    }, (error) => {
      window.alert("An error occured: " + error.text);
    });
  }

}
