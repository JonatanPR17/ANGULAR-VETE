import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelContactsComponent } from './panel-contacts.component';

describe('PanelContactsComponent', () => {
  let component: PanelContactsComponent;
  let fixture: ComponentFixture<PanelContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelContactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
