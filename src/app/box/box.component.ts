import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
@Input('boxitem') current:any;
  constructor() { }

  ngOnInit(): void {
  }

}
