import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.scss']
})
export class ResisterComponent implements OnInit {
  public show = true;
  constructor() { }
  @Output() showEvent = new EventEmitter<boolean>()
  ngOnInit(): void {
  }
  register(){
this.showEvent.emit(this.show);
  }
}
