import { Component } from '@angular/core';

@Component({
  selector: 'app-chiedi-felicita',
  templateUrl: './chiedi-felicita.component.html',
  styleUrls: ['./chiedi-felicita.component.scss']
})
export class ChiediFelicitaComponent {
  isHappy = true;

  onAnswerYes() {
    this.isHappy = true;
  }

  onAnswerNo() {
    this.isHappy = false;
  }
}
