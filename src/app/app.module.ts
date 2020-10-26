import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CropperSampleComponent } from './cropper-sample/cropper-sample.component';
import { CropperModule } from '@deer-inc/cropper';
import { PapaparseComponent } from './papaparse/papaparse.component';

@NgModule({
  declarations: [AppComponent, CropperSampleComponent, PapaparseComponent],
  imports: [BrowserModule, AppRoutingModule, CropperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
