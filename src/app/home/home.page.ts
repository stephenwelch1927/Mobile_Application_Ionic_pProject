import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Button to navigate between different pages
  btnClicked(){
    this.router.navigate(['food'])
  }
  btnClicked1(){
    this.router.navigate(['drink'])
  }
  btnClicked2(){
    this.router.navigate(['forum'])
  }


    
  constructor(public router:Router) {

  }

}
