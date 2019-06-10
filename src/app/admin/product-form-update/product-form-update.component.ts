import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CategoryService } from 'src/app/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form-update',
  templateUrl: './product-form-update.component.html',
  styleUrls: ['./product-form-update.component.css']
})
export class ProductFormUpdateComponent {
  categories$;

  product = {};
  id;
  constructor(categoryService: CategoryService,
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute, ) {

    this.categories$ = categoryService.getCategories();
    console.log(this.categories$);

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    const det = this.productService.get(this.id).valueChanges().subscribe(p => this.product = p);
    console.log(det);
  }

  save(product) {

    if (this.id) {
      // console.log('to update');
      // console.log(product.category);
      // console.log(product);
      this.productService.update(this.id, product);
    } else {
      // console.log(product);
      // console.log('New product added');
      // console.log(product.category);
      // console.log(product);
      this.productService.create(product);
    }

    this.router.navigate(['/admin/products']);
  }

}
