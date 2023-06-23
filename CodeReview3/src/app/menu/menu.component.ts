import { Component } from '@angular/core';
import { Idishes } from '../Idishes';
import { dishes } from '../menu';
import { MyorderService } from '../myorder.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    dishes : Idishes[] = dishes;

    constructor(private myOrder : MyorderService){}

    orderFood(i:number){
      alert("This dish was added to your order!");
       this.myOrder.orderFood(this.dishes[i]);
    }

}
