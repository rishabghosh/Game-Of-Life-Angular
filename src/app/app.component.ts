import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "game-of-life";
  hasStarted: boolean = false;
  coordinate: string;
  range = new Array(5).fill("*");
  initialGen = [];

  constructor() {}

  onClick(event) {
    const cellId = event.target.id;
    if (this.initialGen.includes(cellId)) {
      const index = this.initialGen.indexOf(cellId);
      this.initialGen.splice(index, 1);
      return;
    }
    this.initialGen.push(cellId);
  }

  start() {
    this.hasStarted = true;
    console.log(this.initialGen);
  }
}
