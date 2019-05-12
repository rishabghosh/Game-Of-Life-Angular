import { Component, OnInit, Input } from "@angular/core";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  active: boolean = false;
  enable: boolean = true;

  @Input() hasStarted: boolean;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.active = !this.active;
  }

  getBackground() {
    return this.active ? "black" : "lightgray";
  }

  receive($event) {
    console.log($event);
  }
}
