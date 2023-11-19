import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() inputValue: string | undefined; // Input ricevuto dal componente genitore
  @Output() customEvent = new EventEmitter<void>(); // Output per emettere un evento

  emitEvent() {
    this.customEvent.emit(); // Emette l'evento quando il pulsante viene cliccato
  }
}
