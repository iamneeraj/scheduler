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
  product = ['item1', 'item2 - long text testing ', '12345678'];
  products = ['item1', 'item2 - long text testing ', '12345678'];
  selectedItems = [];
  buttonText="↓";
  errorText="";
  check=false;
  temp=false;
  
  constructor() { }
  cons
  ngOnInit() {
  }
  inputTest(event: Event){
    this.newItem=(<HTMLInputElement>event.target).value;
    if (this.selectedItems.indexOf(this.newItem) >= 0) {
      this.errorText = "Already added";
    }
    
    else if (this.product.indexOf(this.newItem) >= 0) {
      this.item=true;
      this.errorText ="Add item";
    }
    else {
      this.errorText = "";
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
    //this.products.splice(this.products.indexOf(this.selectedItems[index]),1);
    
    
    
  }

  addToList(index){
    
    if (this.selectedItems.indexOf(this.products[index]) == -1) {
      this.selectedItems.push(this.products[index]);
      this.errorText = "";
      
    }
    else{
      this.errorText = "Item already added";
     // this.selectedItems.splice(this.selectedItems.indexOf(this.products[index]),1);
     
    }
  
    //this.click();
  }

  removefromList(){
    this.errorText = "click to delete";
  }
  checkItem(index){
    
  }
  
}
