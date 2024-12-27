import { Component } from '@angular/core';
import { UserFeedback } from '../../models/UserFeedback';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  categories = ['Product quality', 'Product availability',
            'Order related', 'General query'];

  model = new UserFeedback('', '', '', '');

  onSubmit(form: NgForm) {
    if(form.invalid) {
      alert('Please fill in all the required fields.');
      return;
    }
    // Handle form submission here

    form.reset(); 
  }
}
