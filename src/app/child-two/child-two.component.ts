import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  private secondValue : String;
  private receivedValue : String;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentValue.subscribe(value => this.receivedValue = value);
  }

  secondUpdateValue(){
    this.sharedService.changeSecondValue(this.secondValue);
    console.log(this.secondValue);
  }

}
