import { Component, Input, HostBinding } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-avatar",
  template: `<mat-icon inline="true" svgIcon="{{animal}}"></mat-icon>`,
})
export class AvatarComponent {
  @Input()
  animal: string;
  @Input()
  color: string = "#000000";
  borderColor = "#000000";
  constructor(private sanitizer: DomSanitizer) {}
  @HostBinding("style")
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--color-background: ${this.color};
      --color-background-border: ${this.borderColor};`
    );
  }
}
