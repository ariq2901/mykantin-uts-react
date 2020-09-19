import React, { Component } from 'react';

class Pesanan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkout : []
    }
  }

  componentDidUpdate(prevProps) {
    if ( this.props.checkout !== prevProps.checkout ) {
      console.log('checkout diupdate', this.props.checkout);
    }
  }

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
        <div className="row">
          <div className="checkout">
            <div className="imgBrand">
              <img src="https://belajar-react.smkmadinatulquran.sch.id/image/masakan2.jpg"/>
            </div>
            <span>5</span>
            <span>x</span>
            <span className="font-weight-bold">Soto Padang</span>
            <span>50000</span>
          </div>
        </div>
        </div>
    );
  }
}
export default Pesanan;