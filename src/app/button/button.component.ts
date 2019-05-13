import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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

  @Output() sendCoordinate = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.active = !this.active;
    console.log(this.x, this.y);
    this.sendCoordinate.emit(`${this.x} ${this.y}`);
  }

  _sendData() {}

  getBackground() {
    return this.active ? "black" : "lightgray";
  }

  
}
