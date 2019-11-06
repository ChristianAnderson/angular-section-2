import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  private serverId: number;
  private serverStatus: string;
  allowUser : boolean = false;
  serverCreationStatus: string = "No Server Was Created!";
  serverName : string = '';
  serverCreated : boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowUser = true;
    }, 2000);
    console.log('random value ' + (Math.random()));
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
    this.serverId = 10;
    // this.serverStatus = 'down';
  }

  getServerStatus() {
    return this.serverStatus;
  }


  getColor() {
    console.log('status ' + this.serverStatus);
    let getColor: string = this.serverStatus == 'online' ? 'green' : 'red';
    console.log(getColor);
    return getColor;
  }
}
