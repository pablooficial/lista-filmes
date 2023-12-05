import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number; // duração em milissegundos
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastSubject: Subject<Toast> = new Subject();

  show(message: string, type: 'success' | 'error' | 'info', duration = 3000) {
    this.toastSubject.next({ message, type, duration });
  }
}
