import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CoinDetailComponent } from './crypto-wb/coin-detail/coin-detail.component';
import { CryptowebComponent } from './crypto-wb/cryptoweb/cryptoweb.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'crypto', component: CryptowebComponent },
  { path: 'coin-detail/:id', component: CoinDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
