import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEquiposPageRoutingModule } from './lista-equipos-routing.module';

import { ListaEquiposPage } from './lista-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEquiposPageRoutingModule
  ],
  declarations: [ListaEquiposPage]
})
export class ListaEquiposPageModule {}
