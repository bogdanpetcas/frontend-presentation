import React from 'react';
import SidePanel from './SidePanel.jsx';
import ProductSection from './ProductSection.jsx';

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <h1 className="page-header">Bedroom</h1>
          <div className="row no-gutters">
            <div className="col-auto">
              <SidePanel />
            </div>
            <div className="col">
              <ProductSection />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
