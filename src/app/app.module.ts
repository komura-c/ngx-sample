import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CropperSampleComponent } from './cropper-sample/cropper-sample.component';
import { CropperModule } from '@deer-inc/cropper';

@NgModule({
  declarations: [AppComponent, CropperSampleComponent],
  imports: [BrowserModule, AppRoutingModule, CropperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
