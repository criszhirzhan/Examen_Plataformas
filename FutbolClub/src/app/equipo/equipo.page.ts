import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Equipo } from '../model/equipo';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
})
export class EquipoPage implements OnInit {
  equipo: Equipo = new Equipo();

  constructor(public equipoService: EquipoService) { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.equipo);

    this.equipoService.saveequipo(this.equipo);
    alert("Equipo registrado")

    this.equipo = new Equipo();

}

}
