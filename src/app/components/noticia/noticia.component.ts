import { Component, OnInit,Input } from '@angular/core';
import { __importDefault } from 'tslib';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;


  constructor() { }

  ngOnInit() {}

 abrirNoticia(){
   console.log('Noticia', this.noticia.url);

 }

}
