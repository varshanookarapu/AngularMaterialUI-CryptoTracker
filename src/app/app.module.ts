import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParticlesModule } from 'angular-particle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
import { MatTabsModule } from '@angular/material/tabs';
//import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
//import {CourseComponent} from "./course/course.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
// import {CoursesService} from "./services/courses.service";
import { HttpClientModule } from '@angular/common/http';
// import {CourseResolver} from "./services/course.resolver";
// import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {MatMomentDateModule} from "@angular/material-moment-adapter";
// import {CreateCourseComponent} from './create-course/create-course.component';
import { MatStepperModule } from '@angular/material/stepper';
//import {CreateCourseStep1Component} from './create-course/create-course-step-1/create-course-step-1.component';
//import {CreateCourseStep2Component} from './create-course/create-course-step-2/create-course-step-2.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
// import {DragDropComponent} from './drag-drop/drag-drop.component';

import { MatGridListModule } from '@angular/material/grid-list';
// import {TreeDemoComponent} from './tree-demo/tree-demo.component';
import { MatTreeModule } from '@angular/material/tree';
// import {VirtualScrollingComponent} from './virtual-scrolling/virtual-scrolling.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { CoursesCardListComponent } from './courses/courses-card-list/courses-card-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { Createcoursestep1Component } from './create-course/createcoursestep1/createcoursestep1.component';
import { Createcoursestep2Component } from './create-course/createcoursestep2/createcoursestep2.component';
import { CryptowebComponent } from './crypto-wb/cryptoweb/cryptoweb.component';
import { CourseDialogComponent } from './course-dialog/course-dialog/course-dialog.component';
import { CoinDetailComponent } from './crypto-wb/coin-detail/coin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AboutComponent,
    CoursesCardListComponent,
    CreateCourseComponent,
    Createcoursestep1Component,
    Createcoursestep2Component,
    CryptowebComponent,
    CourseDialogComponent,
    CoinDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,

    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    MatCheckboxModule,
    DragDropModule,
    MatRadioModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTreeModule,
    ScrollingModule,
    HttpClientModule,
  ],
  providers: [MatPaginatorModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
