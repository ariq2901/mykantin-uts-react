import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Kategori from './component/Kategori';
import Populer from './component/Populer';
import Person from './component/Person';
import Pesanan from './component/Pesanan';
import Axios from 'axios';
import Modal from './component/Modal';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populer : [],
      kategori_id : '',
      data : []
    }
  }

  onCategory = (id) => {
    console.log('event oncategory dipanggil', id);
  }

  onPopulerChange = (populer1) => {
    console.log('event sudah dipanggil', populer1);
    // const populer2 = Object.entries(populer1);
    const populer2 = Object.keys(populer1).map(i => populer1[i])
    this.setState({
      populer : populer2
    })
    console.log('sudah di set');
  }

  render() {
    return (
      <Fragment>
        <div className="main container py-3">
          <div className="pembagi">
          {/* Menu main */}
            <div className="kolom1"> 
              <div className="row">
                <Navbar />  
              </div>
              <div className="row">
                <Header />
              </div>
              <div className="row">
                <Kategori onCategory={this.onCategory} />
              </div>
              <div className="row">
                <Populer onPopulerChange={this.onPopulerChange} makanan_id={this.state.kategori_id} />
              </div>
            </div>
          {/* End Menu Main   */}
          {/* Menu Checkout */}
            <div className="kolom2">
              <div className="row">
                <Person />
              </div>
              <div className="row">
                <Pesanan />
              </div>
            </div>
          {/* End Menu Checkout */}
          </div>
        </div>
        <Modal name={this.state.populer}/>
      </Fragment>
    );
  }
}

export default Main;