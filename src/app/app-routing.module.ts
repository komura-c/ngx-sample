import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropperSampleComponent } from './cropper-sample/cropper-sample.component';
import { PapaparseComponent } from './papaparse/papaparse.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CropperSampleComponent,
  },
  {
    path: 'papa',
    pathMatch: 'full',
    component: PapaparseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
