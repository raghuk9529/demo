import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'child',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {
@Output() clickemitref=new EventEmitter()
  getTotalSal(){
    alert('i am from child');
    this.clickemitref.emit();
  }
}
