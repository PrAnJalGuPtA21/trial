import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input()
  all: number = 0

  @Input()
  instock: number = 0

  @Input()
  outstock: number = 0
    
  @Output()
  selectedbuttonChange :EventEmitter<string> = new EventEmitter<string>();
  selectedbutton: string = 'all';

  onSelectedChange(){
    console.log("child class");
    console.log(this.selectedbutton);
    this.selectedbuttonChange.emit(this.selectedbutton)
  }
}
