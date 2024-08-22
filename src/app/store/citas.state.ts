// src/app/store/citas.state.ts > aqui se define el estado de la aplicacion relacionado con las citas
import { Cita } from '../models/cita.model';

export interface CitasState {
  readonly citas: Cita[];
  loading: boolean;
  error: string | null;
}

export const initialCitasState: CitasState = {
  citas: [],
  loading: false,
  error: null,
};
