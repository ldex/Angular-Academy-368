import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, finalize, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSub = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSub.asObservable();

  constructor() { }

  loadingOn() {
    this.loadingSub.next(true);
  }

  loadingOff() {
    this.loadingSub.next(false);
  }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): void {
    of(null)
        .pipe(
            tap(() => this.loadingOn()),
            concatMap(() => obs$),
            finalize(() => this.loadingOff())
        ).subscribe();
  }
}
