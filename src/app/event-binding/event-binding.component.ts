import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My button"
  i=0;

  constructor() { }

  spinnerMode = "determinate";
  spinnerValue = 0;
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;
  inputName = "John"
  ngOnInit() {
  }

  save(){
    console.log("clicado")
    this.spinnerValue = 0;

  }

  increment() {
    this.i++;
    this.buttonName = "it Was Clicked " + this.i + " times"
    this.spinnerValue++;
  }

  disabled() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate"
      
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate"
    },3000);
  }

  cbChange(event){
    console.log(event.checked)
    this.selectDisabled = event.checked;
  }

  selectionChange($event){
    this.selectedOption = $event.value;
  }

 
  
}

