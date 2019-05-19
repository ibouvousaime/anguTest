import { Component, OnInit } from '@angular/core';
import { MongoserviceService } from 'src/app/mongoservice.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: MongoserviceService) { }

  validate(email) {
    let email_regex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
    if (email_regex.test(email)) {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }
  checkLogin() {
    console.log("searching");
    let username = (<HTMLInputElement>document.getElementById('name')).value;
    let password = (<HTMLInputElement>document.getElementById('pass')).value;
    if (!this.validate(username)) {
      document.getElementById('logres').innerHTML = "Invalid email";
    }
    else {
      this.service.searchUser(username,password).subscribe(res => {
        console.log(res);
        document.getElementById('logres').innerHTML = JSON.stringify(res);
        return true;
      });
    }
  }
}
