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
  range: string[] = new Array(5).fill("*");
  initialGenIds: string[] = [];
  currentGenIds: string[] = [];

  constructor() {}

  onClick(event: Event): void {
    //explicitely mentioning the type by casting it to html input element
    const cellId = (<HTMLInputElement>event.target).id;

    if (this.initialGenIds.includes(cellId)) {
      const index = this.initialGenIds.indexOf(cellId);
      this.initialGenIds.splice(index, 1);
      return;
    }
    this.initialGenIds.push(cellId);
  }

  private toNumber(elements: string[]): number[] {
    return elements.map(elem => +elem);
  }

  private convertToCellCoord(ids: string[]): number[][] {
    return ids.map(id => this.toNumber(id.split("_")));
  }

  private convertToCellId(coords: number[][]): string[] {
    return coords.map(coord => coord.join("_"));
  }

  start(): void {
    this.hasStarted = true;

    this.currentGenIds = [...this.initialGenIds];
    const bounds = { topLeft: [0, 0], bottomRight: [4, 4] };

    setInterval(() => {
      const cellCoords = this.convertToCellCoord(this.currentGenIds);
      const newGen = nextGeneraton(cellCoords, bounds);
      this.currentGenIds = this.convertToCellId(newGen);
    }, 1000);
  }
}
