import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: any[];
  filteredProducts: any[];
  list$;
  test: any[];
  arr;
  page = 1;
  pageSize = 6;
  // rows = [];
  // loadingIndicator = true;
  // reorderable = true;

  constructor(private productService: ProductService) {
  this.productService.getAll().subscribe(products => { this.filteredProducts = this.products = products; });
  console.log(this.products);


          // tslint:disable-next-line:align
          {// testing
          this.productService.getDetProd().subscribe(cst => {
            this.test = cst.map(item => {
              // console.log(item.payload.val());
              return item.payload;
            });
          });
          }
  console.log(this.test);
  }

  ngOnInit() {
    this.productService.getDetProd().subscribe(cat => {
      this.list$ = cat.map(item => {
        return item.payload;
      });
    });

  }

  delete(id) {
  return this.productService.delete(id);
  }

  filter(query: string) {

    console.log(query);

    this.filteredProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;
    console.log(this.filteredProducts);

  }
}
