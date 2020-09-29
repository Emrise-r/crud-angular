import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  create() {
  this.productService.createProduct(this.product);
  }
}
