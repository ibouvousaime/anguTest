import { Component, OnInit } from '@angular/core';
import {MongoserviceService} from '../mongoservice.service'


function JsonIsCorrect(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

@Component({
  selector: 'app-mongocomponent',
  templateUrl: './mongocomponent.component.html',
  styleUrls: ['./mongocomponent.component.css']
})
export class MongocomponentComponent implements OnInit {
  listColl:string;
  choice:string;
  options:object;
  constructor(private mongoService: MongoserviceService) {
    this.options = {};

  }
  refreshList() {
    this.mongoService.listCollection().subscribe(res => {
      this.listColl = res;
    })
  }
  createCollection(name) {
    this.mongoService.newCollection({collection: name}).subscribe(res => {
      document.getElementById('createStatus').innerHTML = res.res;
    })
  }

  searchDocument(collectionname,docid) {
    this.mongoService.getCollection({collection : collectionname, id: docid}).subscribe(res => {
      document.getElementById('findResult').innerHTML = JSON.stringify(res);
    });
  }
  insertDocument(collection, doc:string) {
    if (JsonIsCorrect(doc)) {
      this.mongoService.insertDoc(collection,document).subscribe(res => {
        document.getElementById('insertResult').innerHTML = JSON.stringify(res);
      })
    }
    else {
      document.getElementById('insertResult').innerHTML = 'JSON incorrect';
    }
  }
  ngOnInit() {
    this.refreshList()

   /* this.mongoService.listCollection().subscribe(res => {
      this.listColl = res;
    })*this.mongoService.getCollection({collection : "listingsAndReviews", id: '10006546'}).subscribe(res => {
    */
    /*this.mongoService.insertDoc(
      {collection : 'listingsAndReviews', 
        docs : 
              {"aaa":"bbb",
               "zz":"123"} 
              }).subscribe(res => {
                this.listColl = JSON.stringify(res);
              })
  }*/
  }
}