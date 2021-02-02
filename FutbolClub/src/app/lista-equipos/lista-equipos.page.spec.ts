import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaEquiposPage } from './lista-equipos.page';

describe('ListaEquiposPage', () => {
  let component: ListaEquiposPage;
  let fixture: ComponentFixture<ListaEquiposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEquiposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEquiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
