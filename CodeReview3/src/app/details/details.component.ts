import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,} from '@angular/router';
import { Idishes } from '../Idishes';
import { dishes } from '../menu';
import { MyorderService } from '../myorder.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dish: Idishes = {} as Idishes;
  index: number = 0;


  constructor(private activatedRoute : ActivatedRoute, private myOrder : MyorderService){}

  orderFood(){
    alert("This dish was added to your order!");
    this.myOrder.orderFood(this.dish);
    console.log(this.dish);
    
  }

  ngOnInit():void {
    this.activatedRoute.params.subscribe((params: any)=>{
      this.index =Number(params["index"]);
      this.dish = dishes[this.index];

    })

  }
}
