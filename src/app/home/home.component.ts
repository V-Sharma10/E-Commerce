import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  items$;
  constructor(private AfD: AngularFireDatabase, private productService: ProductService ) { }
  ngOnInit() {
    this.productService.getDetProd().subscribe(cat => {
      this.items$ = cat.map(item => {
        console.log('key: ' + item.payload.key);    
        // const l : number = length(item.payload.val());

        // console.log(this.list$.length);

        return item.payload;
      });
    });
  }
}
