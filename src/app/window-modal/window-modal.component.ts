import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-window-modal',
  templateUrl: './window-modal.component.html',
  styleUrls: ['./window-modal.component.css']
})
export class WindowModalComponent implements OnInit {

  constructor(private dialogRefSelectWorker: MatDialogRef<WindowModalComponent>) { }

  ngOnInit() {
  }

  action(b: boolean) {
    this.dialogRefSelectWorker.close(b);
  }
}
