import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  template: `<app-server>
  </app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  clicked = true;
  clickstatus="";
  ServerName="";
  constructor() { 
    
    setTimeout(() => {this.clicked = false;},4000);
  }

  ngOnInit() {

  }
    onPress()
    {
        this.clickstatus="you entered :"+this.ServerName;
        
    }
    ShowServerName(event: Event){
      this.ServerName=(<HTMLInputElement>event.target).value;
    }

}
