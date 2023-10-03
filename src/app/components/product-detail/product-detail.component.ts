import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Products } from 'src/app/models/Products';
import { ProductService } from 'src/app/services/productService';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productData: Products;
  allProducts: Products[] = [];
  selectedProduct:number=0;
  constructor(
    private _productService: ProductService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {

    let productId = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log('ime je ', productId); 
    
    productId && this._productService.getProductById(+productId).subscribe((res: any) => {
      this.productData = res;
      console.log(res);
    })
  
}

/*next(): void {
  if (this.productId - 1 < 0) {
    return;
  }
  this.selectedProduct--;
}*/

previous(): void {
  if (this.selectedProduct + 1 >= this.productData.id) {
    return;
  }
  this.selectedProduct++;
}
}






