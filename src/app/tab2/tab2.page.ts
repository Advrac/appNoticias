import { Component,ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../services/noticias.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment) segment : IonSegment;

    categorias: Array<{ id: number, name: string }> = [];
    /* categorias = Array<any[]>();  */
    noticias: Article[];



    constructor(private NoticiasService: NoticiasService){
      this.noticias = [];
      this.categorias= [{'id':75,'name':'General'}, {'id':78,'name':'Cultura'},{'id':65, 'name':'Tabasco'}];
      
    }
  
    ngOnInit(){
      //this.segment.value = this.categorias[0];
      //this.cargarNoticias(this.categorias[0]);
  
    }
    ionViewDidEnter() {
      console.log(this.segment.value);
      this.segment.value = this.categorias[0].id.toString();
     // console.log(this.segment.value);  
      //this.cargarNoticias({ categoria: this.categorias[0] });
      
    }
    
    cambioCategoria(event: { detail: { value: any; }; }){
      this.noticias = [];
    this.cargarNoticias({ categoria: event.detail.value });
    }
  
  cargarNoticias({ categoria, event }: { categoria: string; event?: any; }){
    this.NoticiasService.getTopHeadlinesCategoria(categoria)
    .subscribe( resp => {
            
             console.log(resp);
             for(let res of resp){
               this.noticias.push(res);
             }
             console.log(this.noticias);

            /* this.noticias.push(...resp['articles']); */
            if ( event ) {
              event.target.complete();
            }
          });
  }
 
  loadData( event: any ) {
 
    this.cargarNoticias({ categoria: this.segment.value, event });
 
  }
  
 
}
    


