import { CanDeactivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export type ExitGuardType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
export interface ExitGuard { canExit: () => ExitGuardType; }

export const exitGuardFn: CanDeactivateFn<ExitGuard> = (component: ExitGuard): ExitGuardType => {
  return component.canExit ? component.canExit() : true;
};
