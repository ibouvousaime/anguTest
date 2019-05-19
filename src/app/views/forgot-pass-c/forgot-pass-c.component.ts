import { Component, OnInit } from '@angular/core';
import {SMTPClient} from 'smtp-client';
import { MongoserviceService } from 'src/app/mongoservice.service';

@Component({
  selector: 'app-forgot-pass-c',
  templateUrl: './forgot-pass-c.component.html',
  styleUrls: ['./forgot-pass-c.component.css']
})
export class ForgotPassCComponent implements OnInit {
  transporter: any;
  msg:any;
  email_regex:any;

  sendMail() {
    var dest = (<HTMLInputElement>document.getElementById('forgot_email')).value;
    if (this.email_regex.test(dest)) {
      var result;
      this.service.sendForgot(dest).subscribe(res => result = res);
      /*document.getElementById('sendStatus').innerHTML = result + dest + ".   Redirect in 3 sec..."; 
      setTimeout(function(){
          window.location.href = '/login';
      }, 3000);*/
    }
  else document.getElementById('sendStatus').innerHTML = "email incorrect"; 
}
  constructor(private service: MongoserviceService) { 
    this.email_regex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
  }
  ngOnInit() {
  }

}
/*
function sendForgotPassMail(dest) {
  let s = new SMTPClient({
    host: 'smtp.gmail.com',
    port: 587
  });

  (async function() {
    await s.connect();
    console.log("sending...");
    await s.greet({hostname: 'smtp.gmail.com'}); // runs EHLO command or HELO as a fallback
    await s.authPlain({username: 'wustenbaby@gmail.com', password: 'veneficus'}); // authenticates a user
    await s.mail({from: 'wustenbaby@gmail.com'}); // runs MAIL FROM command
    await s.rcpt({to: dest}); // runs RCPT TO command (run this multiple times to add more recii)
    await s.data('test mail'); // runs DATA command and streams email source
    await s.quit(); // runs QUIT command
  })().catch(console.error);
}



async function sendForgotPassMail (dest) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'wustenbaby@gmail.com',
      pass: 'veneficus'
    }
  });
  var msg = await transporter.sendMail({
    from: '"Fred Foo"',
    to: dest, 
    subject: "Forgotten password" ,
    text: "We don't know to help you recover your password for now."
  });
  
  transporter.sendMail(msg, function(err, info){
    if (err) {
      console.log(err);
      document.getElementById("sendStatus").innerHTML = err.message;
    } else {
      console.log('Email sent: ' + info.response);
      document.getElementById("sendStatus").innerHTML = info.response;
    }
  });
}*/