import { MonoTypeOperatorFunction, Observable, pipe, tap } from "rxjs";

export function log<T>(source$: Observable<T>): Observable<T> {
  return source$.pipe(tap(console.log));
}

export function logWithPrefix<T>(prefix: string): (source$: Observable<T>) => Observable<T> {
  return (source$) =>
    source$.pipe(
        tap(data => console.log(prefix + data))
    );
}

export function logWithPrefix2<T>(prefix: string): MonoTypeOperatorFunction<T> {
    return pipe(
        tap(data => console.log(prefix + data))
      );
  }