import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moving } from './moving.component';

describe('Moving', () => {
  let component: Moving;
  let fixture: ComponentFixture<Moving>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moving]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moving);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
