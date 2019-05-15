import { Component } from "@angular/core";
import nextGeneraton from "../golLib";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private bounds = { topLeft: [0, 0], bottomRight: [10, 10] };
  private id_delim: string = "_";
  private rows: number = this.getRows(this.bounds);

  columns: number = this.getColumns(this.bounds);
  hasStarted: boolean = false;
  range: string[] = new Array(this.rows).fill("*");
  currentGenIds: string[] = [];

  constructor() {}

  private getColumns({ topLeft, bottomRight }): number {
    return bottomRight[1] - topLeft[1] + 1;
  }

  private getRows({ topLeft, bottomRight }): number {
    return bottomRight[0] - topLeft[0] + 1;
  }

  private addCellId(cellId: string): void {
    this.currentGenIds.push(cellId);
  }

  private removeCellId(cellId: string): void {
    const index = this.currentGenIds.indexOf(cellId);
    this.currentGenIds.splice(index, 1);
  }

  private toNumber(elements: string[]): number[] {
    return elements.map(elem => +elem);
  }

  private convertToCellCoord(ids: string[]): number[][] {
    return ids.map(id => this.toNumber(id.split(this.id_delim)));
  }

  private convertToCellId(coords: number[][]): string[] {
    return coords.map(coord => coord.join(this.id_delim));
  }

  onClick(event: Event): void {
    //explicitely mentioning the type by casting it to html input element
    const cellId = (<HTMLInputElement>event.target).id;
    const isAlive = this.currentGenIds.includes(cellId);
    if (isAlive) {
      this.removeCellId(cellId);
      return;
    }
    this.addCellId(cellId);
  }

  start(): void {
    this.hasStarted = true;

    setInterval(() => {
      const cellCoords = this.convertToCellCoord(this.currentGenIds);
      const newGen = nextGeneraton(cellCoords, this.bounds);
      this.currentGenIds = this.convertToCellId(newGen);
    }, 500);
  }
}
