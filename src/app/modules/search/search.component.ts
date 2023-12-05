import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() searchTerm: string = ''; // Recebe o termo de pesquisa do componente pai
  @Output() searchTermChange = new EventEmitter<string>();

  // Método para acionar a pesquisa quando o termo de pesquisa é alterado
  onSearchTermChange() {
    this.searchTermChange.emit(this.searchTerm);
  }

  // Método para acionar a pesquisa quando o botão de pesquisa é clicado
  onSearch() {
        console.log('Search term:', this.searchTerm);
    this.searchTermChange.emit(this.searchTerm);
  }

  // Método para acionar a redefinição quando o botão de redefinição é clicado
  onReset() {
    this.searchTerm = ''; // Reset the searchTerm
    this.searchTermChange.emit(this.searchTerm);
  }
}
