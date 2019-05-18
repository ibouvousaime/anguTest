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
    let text = document.getElementById('name') + " " + document.getElementById('power') + " " + document.getElementById('pass') + " " 
   /* fs.writeFile("accounts.txt",text,function(err) {
      if (err) {
        console.log("fs error");
      }
    });*/
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let power = (<HTMLInputElement>document.getElementById('power')).value;
    let pass = (<HTMLInputElement>document.getElementById('pass')).value;
    console.log(JSON.stringify({n:name, p:power, pa:pass}));
    this.service.insertDoc('value1', JSON.stringify({n:name, p:power, pa:pass})).subscribe(res => {
      console.log(res);
    })
    setTimeout(function(){
        window.location.href = '/login';
    }, 1000);
  }
}
