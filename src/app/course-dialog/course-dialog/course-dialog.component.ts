import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CoursesCardListComponent } from 'src/app/courses/courses-card-list/courses-card-list.component';
import { CoursesComponent } from 'src/app/courses/courses.component';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss'],
})
export class CourseDialogComponent implements OnInit {
  public description: string | undefined;

  form = this.fb.group({
    description: ['', Validators.required],
    category: ['Beginner', Validators.required],
    releasedAt: [new Date(), Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private course: CourseDialogComponent,
    private dialogRef: MatDialogRef<CourseDialogComponent>
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.form.value);
  }
}

export function openEditCourseDialog(
  dialog: MatDialog,
  course: CoursesCardListComponent
) {
  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;
  config.data = { ...course };

  const dialogRef = dialog.open(CourseDialogComponent, config);
  return dialogRef.afterClosed();
}
