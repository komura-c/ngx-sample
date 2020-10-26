import { Component, OnInit } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-cropper-sample',
  templateUrl: './cropper-sample.component.html',
  styleUrls: ['./cropper-sample.component.scss'],
})
export class CropperSampleComponent implements OnInit {
  image: string;
  options: Cropper.Options = {
    aspectRatio: 1 / 1,
    crop(event) {
      console.log(event.detail.x);
      console.log(event.detail.y);
      console.log(event.detail.width);
      console.log(event.detail.height);
      console.log(event.detail.rotate);
      console.log(event.detail.scaleX);
      console.log(event.detail.scaleY);
    },
  };

  constructor() {}

  onCroppedImage(image: string) {
    console.log(image);
  }

  ngOnInit(): void {}
}
