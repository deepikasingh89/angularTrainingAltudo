import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import  {MainService} from '../main.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  toggle: boolean = true;
  @Input() counter: any;
  @Input() item: any;
  @Output() updateOutput = new EventEmitter<any>();
  @Input() needle: string = '';
  @Input() haystack: string = '';
  public result: any = [];
  value: any = 'one way binding';
  //name = 'abcxyz';
  tbColspan = '2';
  pClass = 'colorClass';
  form: any = {
    name: 'abc',
    email: 'abc@gmail.com',
    city: 'daman',
    password: 'xyzabc',
  };
  val=11;
  imageFound:any='';
  constructor(_serive: MainService, private loginservice: LoginService) {
    // let course = new MainService();
    console.log('course', _serive.getCourses());
    console.log(this.loginservice.setLoginDetails().city);
    console.log('inside constructor');
    // console.log('name', this.name);
  }

  ngOnInit(): void {
    console.log('inside ngOnInitdfdfff');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside ngOnChanges', this.counter, changes);
    const regEx = new RegExp('(' + this.needle + ')', 'i');
    this.result = this.haystack.split(regEx);
  }

  ngDoCheck(): void {
    console.log('inside ngDoCheckdfdf');
  }

  ngOnDestroy(): void {
    console.log('inside ngOnDestroy');
  }
  callToogle() {
    this.toggle = this.toggle ? false : true;
    // console.log('name', this.name);
  }

  update() {
    console.log('update btn clicked');
  }

  keyPressed(value: any) {
    //if(event.keyCode==13){
    console.log('key entered pressed', value);
    //}
  }

  btnSave() {
    console.log('form Values', this.form);
  }
}
