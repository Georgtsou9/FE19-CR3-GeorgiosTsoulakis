import { Component, OnInit } from '@angular/core';
import { Idishes } from '../Idishes';
import { MyorderService } from '../myorder.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  myorder: Idishes[]=[];
  total = 0;
  service: any;
  discount: any;
  finalAmount:any;

  constructor(private myOrder1 : MyorderService){}

  ngOnInit(): void {
    this.myorder = this.myOrder1.getFood();
    this.total = this.myOrder1.totalAmount();
    this.service= this.myOrder1.servicef();
    this.discount= this.myOrder1.getDisc();
    this.finalAmount=this.myOrder1.finalAmount();
  }
  
  
}
