import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationReleatedComponent } from './certification-releated.component';

describe('CertificationReleatedComponent', () => {
  let component: CertificationReleatedComponent;
  let fixture: ComponentFixture<CertificationReleatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationReleatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationReleatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
