import React from 'react';

const sortOptions = {
  default: 'Sort by',
  priceAsc: 'Price (low to high)',
  priceDesc: 'Price (high to low)',
  nameAsc: 'Name A-Z',
  nameDesc: 'Name Z-A'
};

class ProductSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      sortOption: sortOptions.default
    }

    this.sortProducts = this.sortProducts.bind(this);
  }

  componentDidMount() {
    fetch('/products.json').then(response => {
      response.json().then(data => {
        this.setState({ products: data });
      })
    })
  }

  sortProducts(option) {
    const products = [...this.state.products];
    let sortedProducts = [];

    switch (option) {
      case sortOptions.priceAsc:
        sortedProducts = products.sort(function (a, b) { return a.price - b.price });
        break;
      case sortOptions.priceDesc:
        sortedProducts = products.sort(function (a, b) { return a.price - b.price }).reverse();
        break;
      case sortOptions.nameAsc:
        sortedProducts = products.sort(function (a, b) {
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
          } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
          } else {
            return 0;
          }
        });
        break;
      case sortOptions.nameDesc:
        sortedProducts = products.sort(function (a, b) {
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
          } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
          } else {
            return 0;
          }
        }).reverse();
      default:
        sortedProducts = products;
        break;
    }

    this.setState({
      products: sortedProducts,
      sortOption: option
    });
  }

  render() {
    return (
      <section>
        <div className="row no-gutters justify-content-end">
          <div className="col-auto">
            <div id="sortBy" className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownSortBy"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.sortOption}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownSortBy">
                <button className="dropdown-item" onClick={() => this.sortProducts(sortOptions.priceAsc)}>Price (low to high)</button>
                <button className="dropdown-item" onClick={() => this.sortProducts(sortOptions.priceDesc)}>Price (high to low)</button>
                <button className="dropdown-item" onClick={() => this.sortProducts(sortOptions.nameAsc)}>Name A-Z</button>
                <button className="dropdown-item" onClick={() => this.sortProducts(sortOptions.nameDesc)}>Name Z-A</button>
              </div>
            </div>
          </div>
        </div>

        <div id="products" className="row">
          {
            this.state.products.map((product, index) =>
              <div className="col-4" key={index}>
                <div className="product">
                  <img src={product.imageUrl} />
                  <div className="product-info">
                    <h6 className="product-name">{product.name}</h6>
                    <p className="product-price">{product.price}</p>
                  </div>
                </div>
              </div>)
          }
        </div>
      </section>
    );
  }
}

export default ProductSection;