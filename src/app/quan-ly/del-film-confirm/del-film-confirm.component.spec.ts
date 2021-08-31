import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelFilmConfirmComponent } from './del-film-confirm.component';

describe('DelFilmConfirmComponent', () => {
  let component: DelFilmConfirmComponent;
  let fixture: ComponentFixture<DelFilmConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelFilmConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelFilmConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
