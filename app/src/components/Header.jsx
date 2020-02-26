import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-sm">
            <a href="/" className="navbar-brand">indoor</a>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav mr-auto">
                <a className="nav-item nav-link" href="#">Home</a>
                <a className="nav-item nav-link" href="#">Decor</a>
                <a className="nav-item nav-link" href="#">Kitchen</a>
                <a className="nav-item nav-link active" href="#">Bedroom</a>
                <a className="nav-item nav-link" href="#">About</a>
                <a className="nav-item nav-link" href="#">Contact</a>
              </div>
              <div id="account">
                <i className="material-icons">account_circle</i>
                <span>Log In</span>
              </div>
              <div id="basket">
                <i className="material-icons">shopping_cart</i>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
