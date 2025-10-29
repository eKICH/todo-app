import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css'
})
export class Pagination {

  currentPage = input(1);
  totalPages = input(1);
  pageNumbers = input<number[]>([]);

  pageChange = output<number>();

  goToPage(page: number){
    if (page >= 1 && page <= this.totalPages()) {

      this.pageChange.emit(page);
      
    }
  }

}
