import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesViewComponent } from './sources-view.component';

describe('SourcesViewComponent', () => {
  let component: SourcesViewComponent;
  let fixture: ComponentFixture<SourcesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourcesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
