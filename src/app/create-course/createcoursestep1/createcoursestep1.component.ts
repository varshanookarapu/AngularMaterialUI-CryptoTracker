import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createcoursestep1',
  templateUrl: './createcoursestep1.component.html',
  styleUrls: ['./createcoursestep1.component.scss'],
})
export class Createcoursestep1Component implements OnInit {
  form = this.fb.group({
    title: [
      '',
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ],
    releasedAt: [new Date(), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: ['', Validators.required, Validators.minLength(5)],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get courseTitle() {
    return this.form.controls['title'];
  }
}
