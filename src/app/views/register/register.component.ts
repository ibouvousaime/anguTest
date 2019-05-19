import { Component, OnInit } from '@angular/core';
import { MongoserviceService } from 'src/app/mongoservice.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private service: MongoserviceService) { }

  ngOnInit() {
  }

  registerSomeone() {
    let text = document.getElementById('email') + " " + document.getElementById('power') + " " + document.getElementById('pass') + " " 
   /* fs.writeFile("accounts.txt",text,function(err) {
      if (err) {
        console.log("fs error");
      }
    });*/
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    let power = (<HTMLInputElement>document.getElementById('power')).value;
    let pass = (<HTMLInputElement>document.getElementById('pass')).value;
    let email_regex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
    if (email_regex.test(email)) {
      console.log(JSON.stringify({n:email, p:power, pa:pass}));
      this.service.insertDoc('value1', JSON.stringify({n:email, p:power, pa:pass})).subscribe(res => {
        console.log(res);
      })
      setTimeout(function(){
          window.location.href = '/login';
      }, 1000);
    }
    else {
      document.getElementById('regres').innerHTML = "incorrect email";
    }
  }
}
