import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.page.html',
  styleUrls: ['./lista-equipos.page.scss'],
})
export class ListaEquiposPage implements OnInit {
  equipos: Observable<any[]>;
  constructor(public equipoService: EquipoService) { }

  ngOnInit() {
    this.equipos = this.equipoService.getequipos();
  }

}
