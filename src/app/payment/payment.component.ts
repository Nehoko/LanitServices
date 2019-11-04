import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private  count:number = 0;

  constructor(@Inject (MAT_DIALOG_DATA) public data: number, private dialogRefSelectWorker: MatDialogRef<PaymentComponent>) { }

  ngOnInit() {

    // @ts-ignore
    this.count = this.data.count;
  }

  payment() {
    this.dialogRefSelectWorker.close()
  }
}
