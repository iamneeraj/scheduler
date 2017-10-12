import { Component, OnInit , Input } from '@angular/core';
//import { Location } from '../tabview/tabview.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() Location: string;
  newItem ="";
  item=false;
  i=0;
  len=0;
  product = ['item1', 'item2 - long text testing ', '12345678','abcd'];
  products = ['item1', 'item2 - long text testing ', '12345678','abcd'];
  selectedItems = [];
  buttonText="↓";
  errorText="";
  check=false;
  temp="";
  
  constructor() { }
  
  ngOnInit() {
  }
  inputTest(event: Event){
    this.newItem=(<HTMLInputElement>event.target).value;
   
  }

  autocomp(str)
  {
    this.len=this.newItem.length;
    if(str.search(this.newItem)>-1 && this.len>1)
    {
        if (this.selectedItems.indexOf(str) == -1){
        this.temp=str;
        return true;
      }
      else{
        this.temp=null;
       return false;
      }
      
    }
    
  }
  click(){
    this.item=this.item==true?false:true;
    this.buttonText=this.buttonText=="↓"?"↑":"↓";
    this.errorText = "";
  }
  addItem(){
    if(this.newItem){
      if (this.products.indexOf(this.newItem) == -1) {
        this.products.push(this.newItem);
        this.addToList(this.products.indexOf(this.newItem));
        this.checkItem(this.products.indexOf(this.newItem));

      }
      else {
        
        this.errorText = "Default item added";
        this.addToList(this.products.indexOf(this.newItem));
      }
    }
  }
  removeItem(index){
    this.errorText = "\""+this.selectedItems[index] + "\"  Removed";
    this.selectedItems.splice(index,1);
    
  }

  addToList(index){
    
    if (this.selectedItems.indexOf(this.products[index]) == -1) {
      this.selectedItems.push(this.products[index]);
      this.errorText = "";
      
    }
    else{
      this.errorText = "Item already added";
     
    }

  }

  removefromList(){
    this.errorText = "click to delete";
  }
  checkItem(index){
    
  }
  
}
