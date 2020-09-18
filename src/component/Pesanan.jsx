import React, { Component } from 'react';

class Pesanan extends Component {
  render() {
    return(
      <div className="container pesanan">
        <div className="row">
          <h3>Pesanan Saya</h3>
          <div className="balance">
            <span className="nama">Mr. Anto</span>
            <span className="saldo">5.000.000</span>
            <span className="id">478576********98038</span>
          </div>
        </div>
        </div>
    );
  }
}
export default Pesanan;