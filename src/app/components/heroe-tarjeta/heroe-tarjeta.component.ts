import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroes } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() heroe:any ={} ;
 @Input() index: number;

 @Output() heroeSeleccionado:EventEmitter<number>; //Le estamos especificando que es un EventEmitter y del tipo número. Los Output van de la mano con los EventEmitter

  constructor(  private _Router:Router) { 
    this.heroeSeleccionado = new EventEmitter(); //De esta manera se inicializa el EventEmitter
  }

  ngOnInit() {
  }

  verHeroe(){
  // console.log(this.index)
  this._Router.navigate( ["/heroe", this.index] );
  // this.heroeSeleccionado.emit(this.index); 
  
  }
}
