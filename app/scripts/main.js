import { sortProducts, renderProducts } from './products';

var PRODUCTS = []; // will act as a global store

function init(data) {
  PRODUCTS = data; // store the product list in a global variable
  renderProducts(PRODUCTS); // display products on page
  bindDropdownSortBy(); // set bindings
}

function bindDropdownSortBy() {
  $('#sortBy .dropdown-item').on('click', function (event) {
    var element = event.target;
    var sortOption = $(element).data('sort');
    var list = sortProducts([...PRODUCTS], sortOption);
    renderProducts(list);
    $('#dropdownSortBy').text($(element).text());
  });
}

$(document).ready(async function () {
  var response = await fetch('/products.json');
  var data = await response.json();

  init(data);
});
