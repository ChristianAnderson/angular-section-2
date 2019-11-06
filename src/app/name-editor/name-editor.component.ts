import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  private value: String;
  private receivedValue : String;
  mockData : String;
  
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.value = "";
    this.mockData = "Stark";

    this.sharedService.secondCurrentValue.subscribe(value => this.receivedValue = value);
  }

  updateValue(){
    this.sharedService.changeValue(this.value);
    console.log(this.value);
  }
}

