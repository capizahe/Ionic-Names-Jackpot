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
  
 setInterval(){
    setInterval(()=>this.setRandomName(),2000);
  }
  

  setRandomName(){
    var n = Math.floor((Math.random() * this.nombres_todos.length)); 
    this.nombre_actual = this.nombres_todos[n];
    console.log("el nombre es "+ this.nombre_actual)
  }

  addNames(){
    
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
