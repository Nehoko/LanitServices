import { Component, OnInit } from '@angular/core';
import {PROP_DECORATORS} from "@angular/compiler-cli/ngcc/src/host/esm2015_host";
import {Product} from "../dto/Product";

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.css']
})
export class DiningComponent implements OnInit {

  private product:Product;
  private backet:Product[];
  private count:number = 0;
  private test:string;

  constructor() { }

  ngOnInit() {
    this.product = new Product();
    this.backet = [];
  }

  addBacket(name:string, price:number) {
    this.test = name;
    this.product.name = name;
    this.product.price = price;
    this.count = this.count + price;
    this.backet.push(this.product);
  }
}





