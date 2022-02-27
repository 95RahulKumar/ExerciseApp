import { Component, OnInit, Inject, EventEmitter, Output,} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
 
  ngOnInit(): void {
  }
  
}

