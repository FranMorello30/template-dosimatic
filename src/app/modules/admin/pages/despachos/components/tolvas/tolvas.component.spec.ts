import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TolvasComponent } from './tolvas.component';

describe('TolvasComponent', () => {
  let component: TolvasComponent;
  let fixture: ComponentFixture<TolvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TolvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TolvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
