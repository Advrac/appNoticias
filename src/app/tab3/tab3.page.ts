import { Component } from '@angular/core';
import { StreamingMedia,StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private streamingMedia: StreamingMedia) {}

  public play(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'portrait',
      shouldAutoClose: true,
      controls: true
    };
    this.streamingMedia.playVideo('https://player.cdnmedia.tv/embed/569184f1', options);
    
  }
}

