import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit {
  startTraining:boolean=false;
  value:number=0;
  myVar:number=0;
  stopEx:boolean=false;
  motivation:boolean=false;
  timeUp:boolean=false;
  constructor(public dialog: MatDialog) { }
  ngAfterViewInit(): void {
    
  }
 
  ngOnInit(): void {
  }
  start(){
    this.motivation=true;
    this.myVar=setInterval(()=>{ 
      this.value=this.value+5;
      if(this.value>=100){
        clearInterval(this.myVar);
        this.motivation=false;
        this.timeUp=true;
       this.stopEx=true;
         }
      }, 1000);
  }
  setvalue(val:boolean){
    this.startTraining=val;
    console.log(this.startTraining);
  }
  stop(){
    clearInterval(this.myVar);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        progress:this.value
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
       this.startTraining=false;
       this.value=0;
       this.stopEx=false;
      }
    });

  }
}
