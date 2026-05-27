import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApilibrosPage } from './apilibros.page';

describe('ApilibrosPage', () => {
  let component: ApilibrosPage;
  let fixture: ComponentFixture<ApilibrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApilibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
