import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.css"]
})
export class RowComponent implements OnInit {
  range: string[] = new Array(5).fill("*");

  @Input() hasStarted: boolean;
  @Input() y: number;
  @Input() private currentGenIds: string[];

  constructor() {}

  ngOnInit() {}

  isActive(id: string): boolean {
    return this.currentGenIds.includes(id);
  }

  getId(x: number): string {
    return `${this.y}_${x}`;
  }
}
