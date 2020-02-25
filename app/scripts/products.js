export const sortProducts = function (products, option) {
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

export const renderProducts = function (list) {
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
