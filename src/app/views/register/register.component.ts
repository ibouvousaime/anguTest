import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  registerSomeone() {
    let text = document.getElementById('name') + " " + document.getElementById('power') + " " + document.getElementById('pass') + " " 
   /* fs.writeFile("accounts.txt",text,function(err) {
      if (err) {
        console.log("fs error");
      }
    });*/
  }
}
