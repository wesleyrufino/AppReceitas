import { ReceitasPage } from './../receitas/receitas';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Component({
  selector: 'page-paginareceitas',
  templateUrl: 'paginareceitas.html',
})
export class PaginareceitasPage {

  receitas = [];

  constructor(public navCtrl: NavController, private http : Http) {

  }

  ionViewWillEnter(){
    this.obterReceitasAPI();
  }

  selecionaReceita(x) {
    console.log(x.nome);
    this.navCtrl.push(ReceitasPage, { receitaSelecionada : x } );
  }

  obterReceitasAPI() {
    this.http.get('http://localhost:3000/receitas')
        .map(response => response.json())
        .toPromise()
        .then(response => this.receitas = response);
  }

}
