import { Injectable } from '@angular/core';
import { Idishes } from './Idishes';

@Injectable({
  providedIn: 'root'
})
export class MyorderService {
  myorder: Idishes[]=[];
  
  
  constructor() { }

  orderFood(obj:Idishes){
    this.myorder.push(obj);

  }

  getFood(){
    return this.myorder;
  }

  totalAmount(){
   let total:number=0;
  

    for(let i of this.myorder){
      
      total = total + i.price;
    }
    
    
    return total;
    
  }

  servicef(){
    let service;
    let test= this.totalAmount();

    service = (test* (10/100));
  
    
    return service;
  }
  
  getDisc(){
    let discount;
    let total=this.totalAmount();

    if (total < 40){
      discount = 0;
    }else{
      discount = total*0.15;
    }
    console.log(typeof(discount));
    
    return discount.toFixed(2);
  }

  finalAmount(){
    let finalAmount;
    let service:any= this.servicef();
    let total:any=this.totalAmount();
    let discount:any= this.getDisc();

    finalAmount=  total + service - discount;

    return finalAmount.toFixed(2);
  }
}
