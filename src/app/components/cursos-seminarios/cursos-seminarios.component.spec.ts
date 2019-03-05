import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosSeminariosComponent } from './cursos-seminarios.component';

describe('CursosSeminariosComponent', () => {
  let component: CursosSeminariosComponent;
  let fixture: ComponentFixture<CursosSeminariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosSeminariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosSeminariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
