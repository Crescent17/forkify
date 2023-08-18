import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    if (numPages === 1) return ``;
    if (curPage === 1 && numPages > 1) {
      return `
              <button data-goto='${curPage + 1}' class='btn--inline pagination__btn--next'>
                <span>Page ${curPage + 1}</span>
                <svg class='search__icon'>
                  <use href='${icons}#icon-arrow-right'></use>
                </svg>
              </button>`;
    }
    if (curPage === numPages && numPages > 1) {
      return `<button data-goto='${curPage - 1}' class='btn--inline pagination__btn--prev'>
                <span>Page ${curPage - 1}</span>
                <svg class='search__icon'>
                  <use href='${icons}#icon-arrow-left'></use>
                </svg>
              </button>`;
    }
    if (curPage < numPages && curPage > 1) {
      return `<button data-goto='${curPage + 1}' class='btn--inline pagination__btn--next'>
                <span>Page ${curPage + 1}</span>
                <svg class='search__icon'>
                  <use href='${icons}#icon-arrow-right'></use>
                </svg>
              </button>
              <button data-goto='${curPage - 1}' class='btn--inline pagination__btn--prev'>
                <span>Page ${curPage - 1}</span>
                <svg class='search__icon'>
                  <use href='${icons}#icon-arrow-left'></use>
                </svg>
              </button>`;
    }
  }
}

export default new PaginationView();