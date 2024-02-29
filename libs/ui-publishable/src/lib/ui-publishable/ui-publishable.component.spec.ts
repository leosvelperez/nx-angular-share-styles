import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiPublishableComponent } from './ui-publishable.component';

describe('UiPublishableComponent', () => {
  let component: UiPublishableComponent;
  let fixture: ComponentFixture<UiPublishableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPublishableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPublishableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
