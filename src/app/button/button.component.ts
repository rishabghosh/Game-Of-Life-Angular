import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  active: boolean = false;
  enable: boolean = true;

  @Input() hasStarted: boolean;
  @Input() x: number;
  @Input() y: number;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.active = !this.active;
  }

  getBackground() {
    return this.active ? "black" : "lightgray";
  }

  getId() {
    return `${this.y}_${this.x}`;
  }
}
