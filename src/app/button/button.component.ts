import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  @Input() hasStarted: boolean;
  @Input() id: string;
  @Input() private active: boolean;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.active = !this.active;
  }

  getBackground() {
    return this.active ? "black" : "lightgray";
  }
}
