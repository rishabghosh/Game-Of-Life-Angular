import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.css"]
})
export class RowComponent implements OnInit {
  @Input() hasStarted: boolean;
  @Input() rowNumber: number;
  @Input() columns: number;
  @Input() private currentGenIds: string[];

  constructor() {}

  ngOnInit() {}

  createRange(limit: number): string[] {
    return new Array(limit).fill("*");
  }

  isActive(id: string): boolean {
    return this.currentGenIds.includes(id);
  }

  getId(columnNumber: number): string {
    return `${this.rowNumber}_${columnNumber}`;
  }
}
