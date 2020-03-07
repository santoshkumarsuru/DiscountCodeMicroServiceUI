import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipentComponent } from './receipent.component';

describe('ReceipentComponent', () => {
  let component: ReceipentComponent;
  let fixture: ComponentFixture<ReceipentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
