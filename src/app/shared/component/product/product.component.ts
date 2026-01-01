import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../model/product';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { SnackabrService } from '../../service/snackabr.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId!:string
  productInfo!:Iproduct
  constructor(
     private _Router:ActivatedRoute,
     private _productService:ProductService,
     private _matDiolog:MatDialog,
     private _routes:Router,
     private _snackbar:SnackabrService

  ) { }

  ngOnInit(): void {

    this._Router.params.subscribe(param=>{
     this.productId=param['productId']
     console.log(this.productId)
     this._productService.fetchProduct(this.productId)
       .subscribe({
        next:res=>{
          console.log(res)
          this.productInfo=res
        }
       })
       
    })
  }

  onRemove(){
   if(this.productId){
    let matconfig=new MatDialogConfig()
    matconfig.data='Are you sure you want to Remove?',
     matconfig.disableClose=true

   let matdilogconfig=  this._matDiolog.open(GetconfirmComponent, matconfig)
     matdilogconfig.afterClosed()
       .subscribe({
        next:res=>{
         console.log(res)
         if(res){
          this._productService.RemoveProduct(res)
          this._routes.navigate(['product'])
          this._snackbar.opesnackbar(`This ${this.productId} removed Succesfully.`)
         }
        }
       })
   }
  }

  onEdit(){
    this._routes.navigate(['/product', this.productId, 'editProduct'])
  }

}
