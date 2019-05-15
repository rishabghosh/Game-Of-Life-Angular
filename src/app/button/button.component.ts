import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  @Input() hasStarted: boolean;
  @Input() id: string;
  @Input() currGen;
  @Input() active: boolean;

  enable: boolean = true;

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log(this.currGen);
    this.active = !this.active;
  }

  getBackground() {
    return this.active ? "black" : "lightgray";
  }
}
