import { Component } from "@angular/core";
import nextGeneraton from "../golLib";

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
  initialGenIds = [];
  currentGenIds = [];

  constructor() {}

  onClick(event) {
    const cellId = event.target.id;
    if (this.initialGenIds.includes(cellId)) {
      const index = this.initialGenIds.indexOf(cellId);
      this.initialGenIds.splice(index, 1);
      return;
    }
    this.initialGenIds.push(cellId);
  }

  convertToCellCoord(ids) {
    return ids.map(id => id.split("_"));
  }

  convertToCellId(coords) {
    return coords.map(coord => coord.join("_"));
  }

  start() {
    this.hasStarted = true;

    this.currentGenIds = [...this.initialGenIds];
    const bounds = { topLeft: [0, 0], bottomRight: [4, 4] };

    const cellCoords = this.convertToCellCoord(this.currentGenIds);
    const newGen = nextGeneraton(cellCoords, bounds);
    this.currentGenIds = this.convertToCellId(newGen);
  }
}
