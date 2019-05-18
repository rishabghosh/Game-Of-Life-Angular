import { Component } from "@angular/core";
import nextGeneraton from "../golLib";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private rows: number = 10;
  private columns: number = 10;
  private idDelim: string = "_";
  private range: string[] = new Array(this.rows).fill("*");

  private intervalId: number;
  private hasStarted: boolean = false;
  private currentGenIds: string[] = [];

  constructor() {}

  /* =============== Privates ================ */

  private updateCurrGen(bounds: Object) {
    const cellCoords: number[][] = this.convertToCellCoord(this.currentGenIds);
    const newGen: number[][] = nextGeneraton(cellCoords, bounds);
    this.currentGenIds = this.convertToCellId(newGen);
  }

  private calculateBounds(): Object {
    return { topLeft: [0, 0], bottomRight: [this.rows, this.columns] };
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
    return ids.map(id => this.toNumber(id.split(this.idDelim)));
  }

  private convertToCellId(coords: number[][]): string[] {
    return coords.map(coord => coord.join(this.idDelim));
  }

  /* =============== Getters =============== */

  getWindow(): Window {
    return window;
  }

  getColumns(): number {
    return this.columns;
  }

  getHasStarted(): boolean {
    return this.hasStarted;
  }

  getRange(): string[] {
    return [...this.range];
  }

  getCurrentGenIds(): string[] {
    return [...this.currentGenIds];
  }

  /* =============== Publics =============== */

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

  start(window: Window): void {
    this.hasStarted = true;
  const bounds: Object = this.calculateBounds();

    this.intervalId = window.setInterval(() => {
      this.updateCurrGen(bounds);
    }, 500);
  }

  reset(): void {
    clearInterval(this.intervalId);
    this.currentGenIds = [];
    this.hasStarted = false;
  }
}
