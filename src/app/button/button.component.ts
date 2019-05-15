import { Component, OnInit, Input } from "@angular/core";
import { getCurrentDebugContext } from "@angular/core/src/view/services";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  @Input() hasStarted: boolean;
  @Input() x: number;
  @Input() y: number;
  @Input() currGen;

  active: boolean = this.isActive();
  enable: boolean = true;

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log(this.currGen);
    this.active = !this.active;
  }

  isActive() {
    console.log("is active is getting invoked");
    if (this.hasStarted) {
      return this.currGen.includes(this.getId());
    }
    return false;
  }

  getBackground() {
    return this.active ? "black" : "lightgray";
  }

  getId() {
    return `${this.y}_${this.x}`;
  }
}
