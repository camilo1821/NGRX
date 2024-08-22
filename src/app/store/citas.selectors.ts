// src/app/store/citas.selectors.ts > aqui se define los selectores para acceder al estado
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CitasState } from './citas.state';

const selectCitasState = createFeatureSelector<CitasState>('citas');

export const selectAllCitas = createSelector(
  selectCitasState,
  (state: CitasState) => state.citas
);

export const selectCitasLoading = createSelector(
  selectCitasState,
  (state: CitasState) => state.loading
);

export const selectCitasError = createSelector(
  selectCitasState,
  (state: CitasState) => state.error
);
