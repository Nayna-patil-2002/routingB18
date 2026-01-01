import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';
import { products } from '../const/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 productArr:Array<Iproduct>=products
  constructor() { }

  fechProductAll():Observable<Iproduct[]>{
  return of(this.productArr)
  }

  fetchProduct(id:string){
   let product=this.productArr.find(p=>p.id===id) as Iproduct
   return of(product)
  }

  addProduct(product:Iproduct){
    this.productArr.push(product)
  }

  RemoveProduct(product:Iproduct){
     let getIndex=this.productArr.findIndex(p=>p.id===product.id)
     this.productArr.splice(getIndex, 1)
  }

  updateProduct(updateObj:Iproduct){
   let getIndex=this.productArr.findIndex(p=>p.id===updateObj.id)
   this.productArr[getIndex]=updateObj
  }
}  
