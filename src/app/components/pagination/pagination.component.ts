import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements AfterViewInit, OnChanges {
  itemsPerPage = 8;
  currentPageNumber = 1;
  private _currentPageNumber = 1;
  totalNumberOfPages = 1;

  // store the page numbers
  numericLinks = [];

  @Input() array = [];
  @Output() pagedItems = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.emitBlocks();
  }

  ngAfterViewInit() {
    this.emitBlocks();
  }

  // generates the page numbers, and stores them in an array
  // note that this does not deal with the previous and next 
  // arrows we see in pages, just the numbers
  buildNumericPageLinks() {
    this.numericLinks = []
    let grandTotalNumberOfItems = this.array.length;
    let totalNumberOfPages = Math.ceil(grandTotalNumberOfItems / this.itemsPerPage);

    let temp: number[] = [];
    for (let x = (this._currentPageNumber - totalNumberOfPages);
      x < ((this._currentPageNumber + this.totalNumberOfPages) + 1); x++) {
      temp.push(x);
    }

    this.currentPageNumber = this._currentPageNumber;
    this.totalNumberOfPages = totalNumberOfPages;

    // filter away negatives
    temp = temp.filter(x => x > 0 && x <= totalNumberOfPages)

    // I want total of five links in paging
    let currentIndex = temp.findIndex(v => v == this.currentPageNumber)
    let t2 = temp[currentIndex - 2] ?? null
    let t1 = temp[currentIndex - 1] ?? null
    let tt = []
    tt.push(t2, t1, temp[currentIndex], temp[currentIndex + 1], temp[currentIndex + 2])
    this.numericLinks = tt.filter(v => v != null)
  }

  // Returns a page number that is half of all the pages
  get halfWayThroughThePages() {
    return Math.ceil(this.totalNumberOfPages / 2);
  }

  goto(pageNumber: number) {
    if (pageNumber < 1 || pageNumber > this.totalNumberOfPages) return;
    this._currentPageNumber = pageNumber;
    this.emitBlocks();
  }

  emitBlocks() {
    this.buildNumericPageLinks();
    let skipACertainAmount = this.itemsPerPage * (this.currentPageNumber - 1);
    this.pagedItems.emit(this.array.slice(skipACertainAmount,
      skipACertainAmount + this.itemsPerPage));
  }
}
