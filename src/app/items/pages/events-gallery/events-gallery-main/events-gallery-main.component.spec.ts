import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGalleryMainComponent } from './events-gallery-main.component';

describe('EventsGalleryMainComponent', () => {
  let component: EventsGalleryMainComponent;
  let fixture: ComponentFixture<EventsGalleryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsGalleryMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsGalleryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
