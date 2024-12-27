import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactReactiveFormComponent } from './contact-reactive-form.component';

describe('ContactReactiveFormComponent', () => {
  let component: ContactReactiveFormComponent;
  let fixture: ComponentFixture<ContactReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactReactiveFormComponent]
    });
    fixture = TestBed.createComponent(ContactReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
