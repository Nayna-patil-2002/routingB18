import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqService } from '../../service/uniq.service';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { SnackabrService } from '../../service/snackabr.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
  productForm!:FormGroup
  isIneditMode:boolean=false;
  productId!:string
  constructor(
    private uuid:UniqService,
    private _productSrrvice:ProductService,
    private _Router:ActivatedRoute,
    private _Rotes:Router,
    private _snackbar:SnackabrService
  ) { }

  ngOnInit(): void {
    this.createProductForm()
    this.editProduct()
  }

  createProductForm(){
    this.productForm=new FormGroup({
      name:new FormControl(null, [Validators.required]),
      price:new FormControl(null, [Validators.required]),
       quantity:new FormControl(null, [Validators.required]),
       status:new FormControl(null, [Validators.required])
    })
  }

  onProductAdd(){
    if(this.productForm.valid){
      let obj={...this.productForm.value, id:this.uuid.Uuid()}
      console.log(obj)
      this._productSrrvice.addProduct(obj)
      this.productForm.reset()
       this._Rotes.navigate(['product'])
      this._snackbar.opesnackbar(`This ${obj.name} added succesfully.`)
    }
  }

  onUpdate(){
    if(this.productForm.valid){
      let updateObj={...this.productForm.value, id:this.productId}
      console.log(updateObj)
      this._productSrrvice.updateProduct(updateObj)
       this.productForm.reset()
       this.isIneditMode=false
       this._Rotes.navigate(['product'])
       this._snackbar.opesnackbar(`This ${updateObj.name} updated succesfully.`)
    }
  }

  editProduct(){
    console.log(this._Router.snapshot.params['productId'])
    this.productId= this._Router.snapshot.params['productId']
    if(this.productId){
      this._productSrrvice.fetchProduct(this.productId)
      .subscribe({
        next:res=>{
          console.log(res)
          this.productForm.patchValue(res)
          this.isIneditMode=true
        }
      })
    }

  }

}
