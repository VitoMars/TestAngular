import { Injectable } from '@angular/core';
import { items } from '../api/items';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  getItems() {
    return items;
  }
  
}
