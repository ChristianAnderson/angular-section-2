import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowUser : boolean = false;
  serverName : string = '';
  serverCreated : boolean = false;
  servers = ['serverTest1', 'serverTest2'];

  constructor() { 
    setTimeout(() => {
      this.allowUser = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push('new Server');
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  } 

}
