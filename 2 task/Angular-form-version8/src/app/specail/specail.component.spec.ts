import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecailComponent } from './specail.component';

describe('SpecailComponent', () => {
  let component: SpecailComponent;
  let fixture: ComponentFixture<SpecailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
