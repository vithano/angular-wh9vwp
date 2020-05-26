import { Component, Input } from '@angular/core';

import { MatDialogRef, MatIcon, MatButton } from "@angular/material";
import { uniqueNamesGenerator, Config, colors } from "unique-names-generator";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationEvent,
  // ...
} from "@angular/animations";




import { colorMap } from "./avatar/colorMap";
import { animalList as animals } from "../../assets/animalList";
@Component({
  selector: 'hello',
  template: `<div
      (click)="changeSpinAnimationState('active')"
      [@spin]="currentSpinAnimState"
      (@spin.done)="onAnimationDone($event)"
      class="spinAxis"
    >
      <app-avatar [animal]="displayableData.animal" [color]="displayableData.color"></app-avatar>
</div>
      {{generatedName[0]}} {{generatedName[1]}}
`
,
  styles: [`app-avatar{
    width: 74px;
    height: 74px;
    z-index: 1;
    
  }
  .spinAxis {
    width: min-content;
    position: relative;
    
    
  }`],
  animations: [
    trigger("spin", [
      transition("notActive => active", [
        animate(
          "0.5s",
          keyframes([
            style({
              transform: "rotate(0deg)",
              "pointer-events": "none",
            }),
            style({ transform: "rotate(360deg)", "pointer-events": "all" }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HelloComponent  {

  generatedName = ["Blue","Cat"];
  currentSpinAnimState = "notActive";
  displayableData = {color:"blue",animal:"cat"};

private customConfig: Config = {
    dictionaries: [colors, animals],
    separator: "-",
    style: "capital",
    length: 2,
  };

  
changeName() {
    this.generateName();
    let color = colorMap[this.generatedName[0].toLowerCase()];
    let animal = this.generatedName[1].toLowerCase();
    this.displayableData = {color,animal};
    this.changeSpinAnimationState("notActive");
  }
  changeSpinAnimationState(state: string) {
    this.currentSpinAnimState = state;
  }
  generateName(){
      this.generatedName = uniqueNamesGenerator(this.customConfig).split(
      this.customConfig.separator
    );
  }
  onAnimationDone(event: AnimationEvent) {
    if (event.toState == "active") {
      this.changeName();
    }
  }

}
