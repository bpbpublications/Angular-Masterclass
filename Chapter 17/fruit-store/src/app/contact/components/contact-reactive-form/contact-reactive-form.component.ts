import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive-form',
  templateUrl: './contact-reactive-form.component.html',
  styleUrls: ['./contact-reactive-form.component.css']
})
export class ContactReactiveFormComponent {
  categories = ['Product quality', 'Product availability',
    'Order related', 'General query'];
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      category: ['Product quality'],
      description: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  ngOnInit() {
    this.contactForm.valueChanges.subscribe((value) => console.log("Value Updated ", value));
  }

  onSubmit() {
    if(this.contactForm.invalid) {
      alert('Please fill in all the required fields.');
      return;
    }
    // Handle form submission here

    this.contactForm.reset();
  }
}