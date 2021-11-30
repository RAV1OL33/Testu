import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCarouselComponent } from './display/gallery-carousel/gallery-carousel.component';
import { EventContainerComponent } from './container/event-container/event-container.component';
import {SharedModule} from "../shared/shared.module";
import { EventCardComponent } from './container/event-card/event-card.component';
import { EventFilterComponent } from './container/event-filter/event-filter.component';
import { CreatedEventsListComponent } from './pages/profile/created-events-list/created-events-list.component';


@NgModule({
    declarations: [
        GalleryCarouselComponent,
        EventContainerComponent,
        EventCardComponent,
        EventFilterComponent,
        CreatedEventsListComponent,
    ],
    exports: [
        GalleryCarouselComponent,
        EventContainerComponent,
        CreatedEventsListComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ItemsModule { }
