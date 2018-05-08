import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-receitas',
  templateUrl: 'receitas.html',
})
export class ReceitasPage {

  public Receitas;
    constructor(public navParams: NavParams) {
  
      this.Receitas = navParams.get('receitaSelecionada');
      
    }
  }
  