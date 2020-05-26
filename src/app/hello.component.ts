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
  template: `
      <app-avatar [animal]="animal" [color]="color"></app-avatar>
`,
  styles: [`app-avatar {
    width: 71px;
    height: 74px;
    z-index: 1;
  }
  .spinAxis {
    width: fit-content;
    position: relative;
  }`],
  animations: [
    trigger("spin", [
      transition("notActive => active", [
        animate(
          "0.3s",
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

  color = "blue";
  animal = "cat";
    currentSpinAnimState = "notActive";
  

private customConfig: Config = {
    dictionaries: [colors, animals],
    separator: "-",
    style: "capital",
    length: 2,
  };

  
changeName() {
    const generatedName = uniqueNamesGenerator(this.customConfig).split(
      this.customConfig.separator
    );
    const color = generatedName[0];
    const animal = generatedName[1];
    this.animal = animal.toLowerCase();
    this.color = colorMap[color.toLowerCase()];

    this.changeSpinAnimationState("notActive");
  }
  changeSpinAnimationState(state: string) {
    this.currentSpinAnimState = state;
  }
  onAnimationDone(event: AnimationEvent) {
    if (event.toState == "active") {
      this.changeName();
    }
  }

}
