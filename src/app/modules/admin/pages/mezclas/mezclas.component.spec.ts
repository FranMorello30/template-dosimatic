import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MezclasComponent } from './mezclas.component';

describe('MezclasComponent', () => {
  let component: MezclasComponent;
  let fixture: ComponentFixture<MezclasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MezclasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MezclasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
