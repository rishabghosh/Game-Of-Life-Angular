import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.css"]
})
export class RowComponent implements OnInit {
  range = new Array(5).fill("*");

  @Input() hasStarted: boolean;
  @Input() y: number;
  @Input() currGen;

  constructor() {}

  ngOnInit() {
    console.log("+++", this.currGen);
  }

  isActive(id) {
    console.log("current gen is", this.currGen);
    return this.currGen.includes(id);
  }
}
