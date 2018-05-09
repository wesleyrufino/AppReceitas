import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PaginareceitasPage } from '../paginareceitas/paginareceitas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController){}
  
  pushPage(){
     this.navCtrl.push(PaginareceitasPage)
  }; 

  }

