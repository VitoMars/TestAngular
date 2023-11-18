import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-rispondi-felicita',
  templateUrl: './rispondi-felicita.component.html',
  styleUrls: ['./rispondi-felicita.component.scss']
})
export class RispondiFelicitaComponent {
  @Output() yes = new EventEmitter<boolean>();
  @Output() no = new EventEmitter<boolean>();
}
