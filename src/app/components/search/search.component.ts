import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  debounce: Subject<string> = new Subject<string>

  @Output() onTyping = new EventEmitter<string>()

  ngOnInit(): void {
    this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.onTyping.emit(filter))
}

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.debounce.next(elemento.value);
    }
  }
}
