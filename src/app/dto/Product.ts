import {Injectable} from "@angular/core";

export class Product {
  id:Number;
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


  get _id(): Number {
    return this.id;
  }

  set _id(value: Number) {
    this.id = value;
  }
}
