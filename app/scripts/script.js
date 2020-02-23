var PRODUCTS = []; // will act as a global store

function init(data) {
  PRODUCTS = data; // store the product list in a global variable
  renderProducts(PRODUCTS); // display products on page
  bindDropdownSortBy(); // set bindings
}

function sortProducts(products, option) {
  switch (option) {
    case 'priceAsc':
      return products.sort(function (a, b) { return a.price - b.price });
    case 'priceDesc':
      return products.sort(function (a, b) { return a.price - b.price }).reverse();
    case 'nameAsc':
      return products.sort(function (a, b) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1;
        } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1;
        } else {
          return 0;
        }
      });
    case 'nameDesc':
      return products.sort(function (a, b) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1;
        } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1;
        } else {
          return 0;
        }
      }).reverse();
    default:
      return products;
  }
}

function renderProducts(list) {
  var container = $('#products');
  container.empty();

  list.forEach(p => {
    container.append(
      '<div class="col-4">' +
        '<div class="product">' +
          '<img src="' + p.imageUrl + '">' +
          '<div class="product-info">' +
            '<h6 class="product-name">' + p.name + '</h6>' +
            '<p class="product-price">' + p.price + ' lei</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  });
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

$(document).ready(function () {
  fetch('/products.json').then(response => {
    response.json().then(data => {
      init(data);
    })
  });
});
