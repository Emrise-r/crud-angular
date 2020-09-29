import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IProduct} from '../iproduct';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  product: IProduct;
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription =this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.product = this.productService.findProductById(id);
    })
  }

  update() {
    this.productService.updateProduct(this.product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
