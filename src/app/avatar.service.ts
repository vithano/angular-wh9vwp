import { NgModule,Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { animalList } from "../../assets/animalList";
@NgModule({
  declarations: [],
  imports: [],
})
@Injectable({
  providedIn: "root",
})
export class AvatarService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    console.log("init icons");
    this.initSvg();
  }
  initSvg() {
    console.log(animalList);
    for (let animal of animalList) {
      this.iconRegistry.addSvgIcon(
        animal.toLowerCase(),
        this.sanitizer.bypassSecurityTrustResourceUrl(
          
          "https://github.com/vithano/heywhatsup/blob/master/src/assets/img/avatar-animals/" + animal.toLowerCase() + ".svg"
        )
      );
    }
  }
}
