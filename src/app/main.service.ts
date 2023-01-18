import { Injectable } from "@angular/core";

@Injectable()

export class MainService {

  constructor() { }

  getCourses(){
    return ['c','c++','java','php'];
  }

  setaddress(){
    return {
      "city":"Daman",
      "state":"Daman",
      "Country":"India"
    }
  }
  
}
