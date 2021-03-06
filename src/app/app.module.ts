import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { MongocomponentComponent } from './mongocomponent/mongocomponent.component';
import { MongoserviceService } from './mongoservice.service';
import { PassresetComponent } from './views/passreset/passreset.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MessagesComponent,
    MongocomponentComponent,
    PassresetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MongoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
