import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryThumbComponent } from './country-thumb.component';

describe('CountryThumbComponent', () => {
  let component: CountryThumbComponent;
  let fixture: ComponentFixture<CountryThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
