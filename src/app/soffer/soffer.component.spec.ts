import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofferComponent } from './soffer.component';

describe('SofferComponent', () => {
  let component: SofferComponent;
  let fixture: ComponentFixture<SofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
