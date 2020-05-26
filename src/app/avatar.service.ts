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
    this.initSvg();
  }
  initSvg() {
    for (let animal of animalList) {
      this.iconRegistry.addSvgIcon(
        animal.toLowerCase(),
        this.sanitizer.bypassSecurityTrustResourceUrl(
          
          "https://raw.githubusercontent.com/vithano/angular-wh9vwp/master/assets/" + animal.toLowerCase() + ".svg"
        )
      );
    }
  }
}
