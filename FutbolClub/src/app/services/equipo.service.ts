import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Equipo } from '../model/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(public afs: AngularFirestore) { }

  saveequipo(equipo: Equipo) {
      const refequipo = this.afs.collection("equipos");
      if (equipo.uid == null) {
          equipo.uid = this.afs.createId();
          equipo.deleted = false;
      }

      refequipo.doc(equipo.uid).set(Object.assign({}, equipo), { merge: true })
  }

  getequipos(): Observable<any[]> {
      return this.afs.collection("equipos",
          ref => ref.where("deleted", "==", false)).valueChanges();
  }




  getequipoById2(uid: string): Observable<any> {
      return this.afs.collection("equipos",
          ref => ref.where('uid', '==', uid))
          .valueChanges();
  }

  borrarequipo(uid: string) {
      const refequipo = this.afs.collection("equipos");

      const aux = { deleted: true };
      refequipo.doc(uid).set({ ...aux }, { merge: true })
  }

}