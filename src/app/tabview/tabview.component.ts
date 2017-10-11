import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.css'] 
})
export class TabviewComponent implements OnInit {
  
  constructor() { }
  tab=false;
  tabnum=[];
  
  i=0;
  home=true;
  activecolor="blue";
  submitbtn=false;
  newTabList=[];
  errorText="";
  tabList=["loc:1 08:00 am","loc:1 09:00 am","loc:1 10:00 am","loc:1 11:00 am","loc:1 12:00 pm","loc:1 01:00 pm","loc:1 02:00 pm","loc:1 03:00 pm","loc:1 04:00 am"];
  ngOnInit() {
  }
  homeClicked(){
    this.home=true;
  }
   tab1(){
     
    this.tab=true;
    //this.activecolor="blue";
   }
   tab2(index){
    this.home=false;
     for(this.i=-1;this.i<6;this.i++)
     {
      this.tabnum[this.i]=false;
     }
     this.tabnum[index]=true;
    this.tab=false;

    //this.activecolor="light-blue";
   }
   homecolor(){
     if(this.home){
     return "active";
    }
    else{
      return "nactive";
    }
  }
  tabcolor(index){

    if(this.tabnum[index] && !this.home){
      this.homecolor();
      return "active";
      
    }
      else{
      return "nactive";
    }
  }
   truecolor(){
     return this.activecolor;
   }
   removeTab(index){
    if(this.tabnum[index]){
     
      this.newTabList.splice(index,1);
      this.tab2(index-1);
      if(index==0){
        this.homeClicked();
        return;
      }
      return;
    }
    else if (!this.newTabList[this.tabnum.indexOf(true)+1]){
     
      this.newTabList.splice(index,1);
      this.tabnum[this.tabnum.indexOf(true)-1]=true;
      this.tabnum[this.tabnum.indexOf(true)+1]=false;
      
    }
    else{
      if(this.tabnum.indexOf(true)<index){
        this.newTabList.splice(index,1);
        return;
      }
      this.newTabList.splice(index,1);
      this.tabnum[this.tabnum.indexOf(true)-1]=true;
      this.tabnum[this.tabnum.indexOf(true)+1]=false;
    }
   
  
   }
   submit(index){
    
   
      if (this.newTabList.indexOf(this.tabList[index]) == -1) {
        if(this.newTabList.length<5){
          this.newTabList.push(this.tabList[index]);
         
        }
        else{
          this.errorText="maximum tabs reached...";
          return;
        }
        this.errorText="";
        for(this.i=0;this.i<5;this.i++)
        {
         this.tabnum[this.i]=false;
        }
        this.tabnum[this.newTabList.indexOf(this.tabList[index])]=true;
        this.home=false;
        console.log(this.tabnum);
      }
      else{
        this.tab2(this.newTabList.indexOf(this.tabList[index]));
      }
      //this.submitbtn= true;
    
    
  }

  setvalue(value){
    return -400;
  }

}
