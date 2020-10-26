import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropperSampleComponent } from './cropper-sample/cropper-sample.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CropperSampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
