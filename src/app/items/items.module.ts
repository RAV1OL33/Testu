import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCarouselComponent } from './display/gallery-carousel/gallery-carousel.component';
import { EventContainerComponent } from './container/event-container/event-container.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
        GalleryCarouselComponent,
        EventContainerComponent,
    ],
  exports: [
    GalleryCarouselComponent,
    EventContainerComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ItemsModule { }
