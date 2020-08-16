import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  })
  export class Tab1Page  implements OnInit{

  noticias: Article[] = [];



  constructor(private noticiasService: NoticiasService) {

  }

  ngOnInit() {
  this.cargarNoticias();
  
  };

  
  loadData(event){
    this.cargarNoticias();
    console.log(event);
  
  }
  cargarNoticias( event?){
    this.noticiasService.getTopHeadlines()
      .subscribe( resp => {
        
        for (let res of resp) {
          this.noticias.push(res);
        }
        console.log('termino el ciclo');
        console.log(this.noticias);
        
        
        /* if (resp.articles.length>0){
          this.noticias.push(...resp.articles);
        }
        if (event){
          event.target.complete();
          event.target.disabled=(resp.articles.length==0);
        } */
      });
  }
}
