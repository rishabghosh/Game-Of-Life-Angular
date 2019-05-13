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

  constructor() {}

  ngOnInit() {}
}
