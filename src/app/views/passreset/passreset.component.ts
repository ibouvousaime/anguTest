import { Component, OnInit } from '@angular/core';
import { MongoserviceService } from 'src/app/mongoservice.service';
import { ActivatedRoute } from '@angular/router';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-passreset',
  templateUrl: './passreset.component.html',
  styleUrls: ['./passreset.component.css']
})
export class PassresetComponent implements OnInit {
  info: any
  constructor(private service: MongoserviceService, private route: ActivatedRoute) {
    this.info = {}
   }


  ngOnInit() {
    this.info.valid = false;
    this.info.data = {};
    console.log(this.route.params);
    this.route.params.subscribe(params=>{
      this.service.checkToken(params['tok']).subscribe(result => {
        this.info.data = result;
        console.log(result);
      });
    });
  }
  changePass() {
    let newPass = (<HTMLInputElement>document.getElementById('newpass')).value;
    this.service.changePassword(this.info.data.d.email,newPass).subscribe(res => {
        if (res.r) {
          console.log(res)
          document.getElementById('finres').innerHTML = "Password changed"
        }
    })
  }
  
}
