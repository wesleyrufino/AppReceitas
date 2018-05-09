import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

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
  