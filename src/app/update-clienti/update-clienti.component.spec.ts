import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientiComponent } from './update-clienti.component';

describe('UpdateClientiComponent', () => {
  let component: UpdateClientiComponent;
  let fixture: ComponentFixture<UpdateClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
