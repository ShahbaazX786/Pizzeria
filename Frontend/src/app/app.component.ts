import { Component } from '@angular/core';
//import { PizzaService } from './../../../Backup/pizzeria/src/app/pizza.service';
//import { Ingredient } from './ingredients.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzeria';
  /*ingredients:any=[];

  constructor(private pizzaService:PizzaService){}
  ngOnInit(){
    this.pizzaService.getAllpizza().subscribe((data:any)=>{
      console.log("received data"+data);
    })
  }*/
}
