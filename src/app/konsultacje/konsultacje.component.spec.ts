import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsultacjeComponent } from './konsultacje.component';

describe('KonsultacjeComponent', () => {
  let component: KonsultacjeComponent;
  let fixture: ComponentFixture<KonsultacjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonsultacjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsultacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
