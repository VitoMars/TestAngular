import { Component, inject } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.scss'],
})
export class CardExampleComponent{

  // Dependency Injection
  constructor(private service: TestServiceService){}
  // Alternativa
  // private service = inject(TestServiceService);
  
  items = this.service.getItems();
  
  // Esempio Property Binding 
  // Per mandare qualcosa da TypeScript -> HTML
  buttonIsDisabled = true;
  
  //Esempio Event Binding
  // Per mandare qualcosa dall'HTML -> TypeScript
  Like() {
    console.log("Hai premuto Like.")
  }

}
