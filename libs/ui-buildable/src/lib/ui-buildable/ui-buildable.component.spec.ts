import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiBuildableComponent } from './ui-buildable.component';

describe('UiBuildableComponent', () => {
  let component: UiBuildableComponent;
  let fixture: ComponentFixture<UiBuildableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBuildableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiBuildableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
