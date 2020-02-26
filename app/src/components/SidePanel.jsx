import React from 'react';

class SidePanel extends React.Component {
  render() {
    return (
      <aside>
        <h5 className="page-filter">Filter by</h5>
        <div id="priceFilter">
          <a className="collapsed" href="#priceSubmenu" data-toggle="collapse" aria-expanded="false">Price</a>
          <div id="priceSubmenu" className="nav collapse">
            <div id="priceRangeSelector">
              <a className="knob left"></a>
              <div className="price-range-bar"></div>
              <a className="knob right"></a>
            </div>
            <div id="priceValues">
              <span className="min-price">10 lei</span>
              <span className="max-price">300 lei</span>
            </div>
          </div>
        </div>
        <div id="colorFilter">
          <a href="#colorSubmenu" data-toggle="collapse" aria-expanded="false" className="collapsed">Color</a>
          <div id="colorSubmenu" className="nav collapse">
            <div id="colorOptions">
              <div className="color-option blue"></div>
              <div className="color-option orange"></div>
              <div className="color-option white"></div>
              <div className="color-option bleumarin"></div>
              <div className="color-option green"></div>
              <div className="color-option grey"></div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default SidePanel;