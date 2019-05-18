import { Component, OnInit } from '@angular/core';
import { MongoserviceService } from 'src/app/mongoservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: MongoserviceService) { }

  ngOnInit() {
  }
  checkLogin() {
    console.log("searching");
    let username = (<HTMLInputElement>document.getElementById('name')).value;
    let password = (<HTMLInputElement>document.getElementById('pass')).value;
    this.service.searchUser(username,password).subscribe(res => {
      console.log(res);
      document.getElementById('logres').innerHTML = JSON.stringify(res)
      return true;
    });
  }
}
