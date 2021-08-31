import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimHoatHinhComponent } from './phim-hoat-hinh.component';

describe('PhimHoatHinhComponent', () => {
  let component: PhimHoatHinhComponent;
  let fixture: ComponentFixture<PhimHoatHinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhimHoatHinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhimHoatHinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
