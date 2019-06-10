import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private db: AngularFireDatabase) {

  }


  getAll() {
  return this.db.list('/products').valueChanges();
  }

  getDetProd() {
    return this.db.list('/products').snapshotChanges();
  }

  get(productId) {
    return this.db.object('/products/' + productId);
  }
  create(product) {
    alert('New Product Added.');
    return this.db.list('/products').push(product);
  }
  update(productId, product) {
    alert('Product Updated.');
    return this.db.object('/products/' + productId).update(product);
  }
  delete(productId) {
    // console.log(productId);
    if ( confirm('Are you sure you want to delete this product?') ) {
    return this.db.object('/products/' + productId).remove(); }
  }
}
