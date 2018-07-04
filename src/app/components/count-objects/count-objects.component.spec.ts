import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountObjectsComponent } from './count-objects.component';

describe('CountObjectsComponent', () => {
  let component: CountObjectsComponent;
  let fixture: ComponentFixture<CountObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
