import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapaparseComponent } from './papaparse.component';

describe('PapaparseComponent', () => {
  let component: PapaparseComponent;
  let fixture: ComponentFixture<PapaparseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapaparseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapaparseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
