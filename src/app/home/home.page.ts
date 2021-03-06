import { Component } from '@angular/core';
import { interval , Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  nombres : string;
  nombres_todos: Array<string>
  nombre_actual : string;
  timer : 5;
 setInterval(){
    setInterval(()=>{this.setRandomName(); this.timer--;},2000);
  }
  
  setRandomName(){
    if(this.timer>0){
    var n = Math.floor((Math.random() * this.nombres_todos.length)); 
    this.nombre_actual = this.nombres_todos[n];
    console.log("el nombre es "+ this.nombre_actual)
    }
    else{
      this.nombre_actual="";
    }
  }

  addNames(){
    this.timer= 5;
   this.nombres_todos =  this.nombres.split(",")
   console.log(this.nombres_todos)
   this.setRandomName();
   this.setInterval()

  }

  ngOnInit(){
    if(this.nombres_todos != null){
      this.setInterval()
    }
    this.nombre_actual = "";
  }

  constructor() {}

}
