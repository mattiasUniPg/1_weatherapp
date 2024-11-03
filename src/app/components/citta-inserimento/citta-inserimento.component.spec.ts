import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CittaInserimentoComponent } from './citta-inserimento.component';

describe('CittaInserimentoComponent', () => {
  let component: CittaInserimentoComponent;
  let fixture: ComponentFixture<CittaInserimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CittaInserimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CittaInserimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
