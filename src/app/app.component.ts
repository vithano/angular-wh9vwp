import { Component ,ViewChild} from '@angular/core';

import {AvatarService} from "./avatar.service";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  
})
export class AppComponent  {
  constructor(private avatarService:AvatarService){}

}
