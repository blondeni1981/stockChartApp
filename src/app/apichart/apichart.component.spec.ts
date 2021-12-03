import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIChartComponent } from './apichart.component';

describe('APIChartComponent', () => {
  let component: APIChartComponent;
  let fixture: ComponentFixture<APIChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APIChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
