import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  listproduct: IProduct[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.listproduct =this.productService.findAll();
  }

}
