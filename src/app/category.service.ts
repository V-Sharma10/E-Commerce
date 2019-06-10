import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map, } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {
  test$;
  ngOnInit() {


  }

  constructor(private db: AngularFireDatabase, private afDb: AngularFireDatabase, ) { }

  getCategories(): Observable<any[]> {
    //  this.getDetCat().subscribe(cst => {
    //   this.test$ = cst.map(item => {
    //     return item.payload;
    //   })
    // })
    // {// testing
    //   this.getDetCat().subscribe(cst => {
    //     this.test$ = cst.map(item => {
    //       // console.log(item.payload.val());
    //       return item.payload;
    //     });
    //   });
    // }
    // console.log(this.test$);
    // return this.test$;

    return this.db.list('/categories').valueChanges();
  }
    getDetCat() {
      return this.db.list('/categories').snapshotChanges(); }
  }
