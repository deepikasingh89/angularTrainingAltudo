import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './main.service';

@Component({
  selector: 'course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  attributedir: any = 'Angular Course';

  val = 1;
  //courses = [1, 2];
  courses = {
    title: 'Angular Courses',
    student: 30123,
    rating: '4.9725',
    price: 190.95,
    relaseDate: new Date(),
  };
  items: any[] = [
    { name: 'One', val: 1 },
    { name: 'Two', val: 2 },
    { name: 'Three', val: 3 },
  ];
  forms: any = [
    {
      element: 'text',
      items: [
        {
          field: 'text',
          ngmodel: '',
        },
        {
          field: 'email',
          ngmodel: '',
        },
      ],
    },
    {
      element: 'password',
      items: [
        {
          field: 'password',
          ngmodel: '',
        },
      ],
    },
    {
      element: 'textarea',
      items: [
        {
          field: 'textarea',
          ngmodel: '',
        },
      ],
    },
    {
      element: 'button',
      items: [
        {
          field: 'password',
          ngmodel: '',
        },
      ],
    },
  ];

  selectedValue: string = 'One';
  pipeEx =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, recusandae voluptates, nam excepturi sapiente voluptatum quidem, porro vero eligendi quos dolorem. Odit labore ipsum fugit, impedit incidunt voluptatibus commodi dolore!';

  searchtext = '';
  value = 'Angular';

  constructor(_serive: MainService, private aroute:ActivatedRoute) {
    // let course = new MainService(1);
    console.log('course', _serive.getCourses());
    console.log('this.aroute', this.aroute);
    this.aroute.queryParams.subscribe((data)=>console.log(data));
  }

  btnSave() {
    console.log('forms', this.forms);
  }
}
