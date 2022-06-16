import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWithComponent } from './home-with.component';

describe('HomeWithComponent', () => {
  let component: HomeWithComponent;
  let fixture: ComponentFixture<HomeWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
