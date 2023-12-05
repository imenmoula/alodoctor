import { CanActivateFn } from '@angular/router';

export const patientsGuard: CanActivateFn = (route, state) => {
  return true;
};
