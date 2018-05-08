import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { PaginareceitasPage } from '../paginareceitas/paginareceitas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController){}
  pushPage(){
     console.log
     this.navCtrl.push(PaginareceitasPage)
  }; 

  }

