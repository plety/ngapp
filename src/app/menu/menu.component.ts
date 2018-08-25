import { Component, OnInit } from '@angular/core';
// import { Hero } from './hero';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  hero = {'name':3};
  constructor() { }

  ngOnInit() {
  }

}
