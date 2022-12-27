import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { SearchComponent } from './components/search/search.component';
import { PhotosPipe } from './components/photos/photos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    SearchComponent,
    PhotosPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
