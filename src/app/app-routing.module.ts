import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileMainComponent} from "./items/pages/profile/profile-main/profile-main.component";
import {EventsGalleryMainComponent} from "./items/pages/events-gallery/events-gallery-main/events-gallery-main.component";

const routes: Routes = [
  {path:'', component: EventsGalleryMainComponent},
  {path:'profile', component: ProfileMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ArrayOfComponents = [EventsGalleryMainComponent, ProfileMainComponent]
