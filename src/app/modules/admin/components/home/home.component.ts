import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  onChange(value :string ){
    console.log("parent class");
    console.log(value);
  }
 ngOnInit(): void {
    // const subject = new BehaviorSubject<number>(100);
    // subject.subscribe((data)=>{console.log(data);})
    // subject.subscribe((data)=>{console.log(data);})
    // subject.subscribe((data)=>{console.log(data);})
    // subject.next(2020); 

// let obs = new Observable((observer)=>{observer.next(Math.random())})

// obs.subscribe((data)=>{console.log(data);})
// obs.subscribe((data)=>{console.log(data);})

// const subject = new Subject();
// subject.subscribe((data)=>{console.log(data);})
// subject.subscribe((data)=>{console.log(data);})
// subject.next(2020)
// subject.subscribe((data)=>{console.log(data);})
// subject.complete( )


 }
 
}
