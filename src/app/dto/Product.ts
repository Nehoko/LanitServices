import {Injectable} from "@angular/core";

export class Product {
  public price:number;
  public name:string;


  get _price(): number {
    return this.price;
  }

  set _price(value: number) {
    this.price = value;
  }


  get _name(): string {
    return this.name;
  }

  set _name(value: string) {
    this._name = value;
  }
}
