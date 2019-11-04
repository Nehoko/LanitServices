import { Component, OnInit } from '@angular/core';
import {PROP_DECORATORS} from "@angular/compiler-cli/ngcc/src/host/esm2015_host";
import {Product} from "../dto/Product";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {WindowModalComponent} from "../window-modal/window-modal.component";
import {PaymentComponent} from "../payment/payment.component";

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
  private i:number = 0;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.product = new Product();
    this.backet = [];
  }

  addBacket(name:string, price:number) {
    let product = new Product();

    this.test = name;
    let idProduct = this.getRandom();
    while (this.backet.some(product => product._id == idProduct)) {
      idProduct = this.getRandom();
    }

    product.id = idProduct ;
    product.name = name;
    product.price = Number(price);
    this.count = this.count + price;
    this.backet.push(product);
    this.getRandom();
  }

  deleteProduct(_id: number, price:number) {
    this.backet = this.backet.filter(item => item._id !== _id);
    this.count = this.count - price;
  }

  getRandom() {
    return Math.random();
  }

  deleteAll() {
    if (this.backet.length == 0) return;
    const dialogDownload = new MatDialogConfig();
    dialogDownload.disableClose = true;
    dialogDownload.autoFocus = true;
    dialogDownload.height = "9,3%";
    dialogDownload.width = "20%";
    dialogDownload.closeOnNavigation = true;
    const dialogRefDownload = this.dialog.open(WindowModalComponent, dialogDownload);
    dialogRefDownload.afterClosed().subscribe(data => {
      if (data) {
        this.backet = [];
      }
    });
  }

  payment() {
    const dialogDownload = new MatDialogConfig();
    dialogDownload.disableClose = true;
    dialogDownload.autoFocus = true;
    dialogDownload.height = "9,3%";
    dialogDownload.width = "20%";
    dialogDownload.closeOnNavigation = true;
    dialogDownload.data  = {count: this.count};
    const dialogRefDownload = this.dialog.open(PaymentComponent, dialogDownload);
    /*dialogRefDownload.afterClosed().subscribe(data => {
      if (data) {
        this.backet = [];
      }
    });*/
  }
}





