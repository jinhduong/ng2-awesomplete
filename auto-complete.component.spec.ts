import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesompleteComponent } from './auto-complete.component';

describe('AwesompleteComponent', () => {
  let component: AwesompleteComponent;
  let fixture: ComponentFixture<AwesompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
