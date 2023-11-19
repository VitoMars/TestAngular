import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { Pizza } from 'src/app/interfaces/generics-interfaces';

// interface Pizza {
//   nome: string;
//   prezzo: number;
// }

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss'],
})
export class ProvaComponent {

  inputRicerca: string = "";

  elencoPizze: Pizza[] = [
    { nome: "Margherita", prezzo: 3.00 },
    { nome: "Napoli", prezzo: 3.50 },
    { nome: "Giacalone", prezzo: 4.00 },
    { nome: "Italia", prezzo: 4.50 },
  ];

  risultatoRicerca: Pizza[] = this.elencoPizze;

  onInput(e: Event) {
    const value = (<HTMLInputElement>e.target).value.toLowerCase();
    console.log(value);

    this.risultatoRicerca = this.elencoPizze.filter(pizza => pizza.nome.toLowerCase().includes(value));

    // Alternativa
    // this.risultatoRicerca = this.elencoPizze.filter(pizza => pizza.nome.toLowerCase().includes(this.inputRicerca.toLowerCase()));
  }
}
