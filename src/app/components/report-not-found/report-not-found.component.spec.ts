import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNotFoundComponent } from './report-not-found.component';

describe('ReportNotFoundComponent', () => {
  let component: ReportNotFoundComponent;
  let fixture: ComponentFixture<ReportNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
