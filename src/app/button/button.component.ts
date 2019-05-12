import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  active: boolean = false;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.active = !this.active;
  }

  getBackground() {
    return this.active ? "black" : "lightgray";
  }
}
