import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.scss']
})
export class ProductdashboardComponent implements OnInit {
    productarr:Array<Iproduct>=[]
  selectedProduct: any;

  constructor( 
    private _productService:ProductService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  this.fetchaProducts()
  }

    fetchaProducts(){
      this._productService.fechProductAll()
       .subscribe({
        next:(res: any)=>{
          console.log(res)
          this.productarr=res
        }
       })
    }


    onCard(productId:string){
      const selectedProduct = this.productarr.find(p => p.id === productId);
     this._router.navigate(['/product', productId],{
       queryParams:{
        status:this.selectedProduct?.status
       }
     }
     
     )
    }

   onForm(){
  this._router.navigate(['/product/addproduct']);
}

  

}
