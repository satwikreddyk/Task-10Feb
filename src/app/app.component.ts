import { Component } from '@angular/core';
import {boxitems} from './box1/datalist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  items=boxitems;
}
