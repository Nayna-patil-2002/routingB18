import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsDsahboardComponent } from './fairs-dsahboard.component';

describe('FairsDsahboardComponent', () => {
  let component: FairsDsahboardComponent;
  let fixture: ComponentFixture<FairsDsahboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsDsahboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsDsahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
