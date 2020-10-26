import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperSampleComponent } from './cropper-sample.component';

describe('CropperSampleComponent', () => {
  let component: CropperSampleComponent;
  let fixture: ComponentFixture<CropperSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropperSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
