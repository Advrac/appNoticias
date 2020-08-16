import { Component, OnInit,Input } from '@angular/core';
import { __importDefault } from 'tslib';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;


  constructor( private iab: InAppBrowser,public actionSheetController: ActionSheetController) {}

  ngOnInit() {}

 abrirNoticia(){
   console.log('Noticia', this.noticia.link);
   const browser = this.iab.create(this.noticia.link);

  

 }

 async ExtendMenu() {
  const actionSheet = await this.actionSheetController.create({
    
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Compratir',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Favorito',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}

}
