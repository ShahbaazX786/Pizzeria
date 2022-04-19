import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Itemclass } from './ingredient.model';
//import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})

export class PizzaService {

  constructor(private httpClient:HttpClient) { }

  getallitems()
  {
    return this.httpClient.get('http://localhost:3000/test/ingredients');
  }

  /*addingredient(ingredient:Ingredient)
  {
    return this.httpClient.post("http://localhost:3000/Pizzeria/ingredients",ingredient);
  }
  */
}
