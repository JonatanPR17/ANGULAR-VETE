import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProductsComponent } from './component-products.component';

describe('ComponentProductsComponent', () => {
  let component: ComponentProductsComponent;
  let fixture: ComponentFixture<ComponentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
