import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarCheckerComponent } from './grammar-checker.component';

describe('GrammarCheckerComponent', () => {
  let component: GrammarCheckerComponent;
  let fixture: ComponentFixture<GrammarCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarCheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammarCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
