import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  title = '登录';
  clickMessage = '';
  person = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {

  }

  onClickMe(): void {
    this.clickMessage = 'You are my hero!';
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  login(res): void {

    if(res[0] != undefined && res[1] != undefined){
        console.log('ok')
      this.router.navigate(['/home']);
    }
    // this.location.back();
  }
}
