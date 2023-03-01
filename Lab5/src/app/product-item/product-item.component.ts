import {Component, Input, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() product !: Product


  constructor(private route: ActivatedRoute,) {

  }

  ngOnInit(): void {

  }

  share(src: string | URL | undefined) {
    // window.alert('The product has been shared!');
    window.open("https://wa.me/79172907400?text=Хочу приобрести товар по ссылке " + src,  'menubar=off,toolbar=off')
  }

  remove(){
    products.splice(this.product.id-1, 1)
  }
  Buy(src: string | URL | undefined) {
    window.open(src);
  }

  like(id: number){
    products[id-1].like++;
  }


}