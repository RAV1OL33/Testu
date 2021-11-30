import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedEventsListComponent } from './created-events-list.component';

describe('CreatedEventsListComponent', () => {
  let component: CreatedEventsListComponent;
  let fixture: ComponentFixture<CreatedEventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedEventsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
