import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  {
  title: string = "game-of-life";
  hasStarted: boolean = false;
  coordinate: string;
  range = new Array(5).fill("*");

  start() {
    this.hasStarted = true;
  }

  // checkCoordinate($event) {
  //   this.coordinate = $event;
  // }
}
