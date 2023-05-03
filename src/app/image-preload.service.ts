import { Injectable } from '@angular/core';
import { Observable, forkJoin, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagePreloadService {
  preloadImage(url: string): Observable<void> {
    const subject = new ReplaySubject<void>(1);

    const img = new Image();
    img.onload = () => {
      subject.next();
      subject.complete();
    };
    img.onerror = () => {
      subject.next();
      subject.complete();
    };
    img.loading = 'eager';
    img.src = url;

    return subject.asObservable();
  }

  preloadImages(images: string[]): Observable<void[]> {
    return forkJoin(images.map(this.preloadImage));
  }
}
