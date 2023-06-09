import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserimageComponent } from './userimage.component';

describe('UserimageComponent', () => {
  let component: UserimageComponent;
  let fixture: ComponentFixture<UserimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
