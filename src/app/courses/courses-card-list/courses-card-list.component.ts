import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss'],
})
export class CoursesCardListComponent implements OnInit {
  courses: any;

  beginnerCourses: any = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      images: 'https://dummyjson.com/image/i/products/1/1.jpg',
    },

    {
      id: 2,
      title: 'iPhone 10',
      description: 'An apple mobile which is nothing like apple',
      price: 544,
      images: 'https://dummyjson.com/image/i/products/2/1.jpg',
    },

    {
      id: 3,
      title: 'iPhone 3',
      description: 'An apple mobile which is nothing like apple',
      price: 5400,
      images: 'https://dummyjson.com/image/i/products/3/1.jpg',
    },

    {
      id: 4,
      title: 'iPhone 99',
      description: 'An apple mobile which is nothing like apple',
      price: 539,
      images: 'https://dummyjson.com/image/i/products/4/1.jpg',
    },

    {
      id: 5,
      title: 'iPhone 12',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      images: 'https://dummyjson.com/image/i/products/5/1.jpg',
    },
  ];
  advancedCourses: any = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      images: 'https://dummyjson.com/image/i/products/1/1.jpg',
    },

    {
      id: 2,
      title: 'iPhone 10',
      description: 'An apple mobile which is nothing like apple',
      price: 544,
      images: 'https://dummyjson.com/image/i/products/2/1.jpg',
    },

    {
      id: 3,
      title: 'iPhone 3',
      description: 'An apple mobile which is nothing like apple',
      price: 5400,
      images: 'https://dummyjson.com/image/i/products/3/1.jpg',
    },

    {
      id: 4,
      title: 'iPhone 99',
      description: 'An apple mobile which is nothing like apple',
      price: 539,
      images: 'https://dummyjson.com/image/i/products/4/1.jpg',
    },

    {
      id: 5,
      title: 'iPhone 12',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      images: 'https://dummyjson.com/image/i/products/5/1.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  editCourse(){
    
  }


}
