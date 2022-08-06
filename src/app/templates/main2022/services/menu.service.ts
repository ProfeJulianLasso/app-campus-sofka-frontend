import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private flag: boolean;
  flagChanged: EventEmitter<boolean>;

  constructor() {
    this.flag = true;
    this.flagChanged = new EventEmitter<boolean>();
  }

  getFlag(): boolean {
    return this.flag;
  }

  changeFlag(value: boolean) {
    this.flag = value;
    this.flagChanged.emit(value);
  }
}
