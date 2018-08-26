import { Component, OnInit } from '@angular/core';
// import { Hero } from './hero';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  hero = [
    {name:'Home',src:'./home'},
    {name:'Calendar',src:'./home'},
    {name:'Overview',src:'./home'},
    {name:'Groups',src:'./home'},
    {name:'Lists',src:'./home'},
    {name:'Profile',src:'./home'},
    {name:'Timeline',src:'./home'},
    {name:'Settings',src:'./home'},
    {name:'Logout',src:'./home'}
    ];
  constructor() { }

  ngOnInit() {
  }
}
