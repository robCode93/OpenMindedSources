import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilereferencesViewComponent } from './filereferences-view.component';

describe('FilereferencesViewComponent', () => {
  let component: FilereferencesViewComponent;
  let fixture: ComponentFixture<FilereferencesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilereferencesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilereferencesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
