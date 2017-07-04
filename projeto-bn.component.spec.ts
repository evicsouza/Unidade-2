import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoBnComponent } from './projeto-bn.component';

describe('ProjetoBnComponent', () => {
  let component: ProjetoBnComponent;
  let fixture: ComponentFixture<ProjetoBnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoBnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoBnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
