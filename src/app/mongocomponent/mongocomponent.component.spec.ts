import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongocomponentComponent } from './mongocomponent.component';

describe('MongocomponentComponent', () => {
  let component: MongocomponentComponent;
  let fixture: ComponentFixture<MongocomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
