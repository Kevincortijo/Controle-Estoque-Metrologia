import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialOutput } from './material-output.component';

describe('MaterialOutput', () => {
  let component: MaterialOutput;
  let fixture: ComponentFixture<MaterialOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
