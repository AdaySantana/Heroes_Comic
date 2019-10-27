import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { Router } from '@angular/router';




import { HeroesService, Heroes } from '../../services/heroes.service';





@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  heroe:any[] = [];
  termino:string;

  constructor(private _heroesService:HeroesService,
              private _activatedRoute:ActivatedRoute,
              private _Router:Router
              


  ) { 


  

  }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
  
      this.termino = params['termino']
      this.heroe = this._heroesService.buscarHeroe(params['termino'])
      


     
  
    });



  }

  verHeroe(idx:number){

    this._Router.navigate( ["/heroe", idx] );

    

  }



 
    
  }


