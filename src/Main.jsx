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
      data : [],
      populer_data : [],
      hasil_pesanan : [],
      total_harga : '',
      potong_saldo : ''
    }
  }

  categoryHandle = (data_id) => {
    this.setState({
      kategori_id : data_id
    })
  }

  populerData = (populer_data) => {
    this.setState({
      populer_data : populer_data
    })
  }

  pesananHasil = (hasil_pesanan) => {
    this.setState({
      hasil_pesanan : hasil_pesanan
    })
  }
  
  pesananHasilHarga = (total_harga) => {
    this.setState({
      total_harga : total_harga
    })
  }

  handlerAdd = () => {
    const row = this.state.per_page
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`
    Axios
    .get(url)
    .then(response => {
      this.setState({
        data : response.data.data,
        page : response.data.meta.current_page,
        last_page : response.data.meta.last_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <Fragment>
        <div className="main container pt-1 pb-2">
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
                <Kategori categoryHandle={this.categoryHandle} />
              </div>
              <div className="row">
                <Populer populer={this.populerData} category={this.state.kategori_id} />
              </div>
            </div>
          {/* End Menu Main   */}
          {/* Menu Checkout */}
            <div className="kolom2">
              <div className="row">
                <Person />
              </div>
              <div className="row">
                <Pesanan checkout={this.state.hasil_pesanan} totalHarga={this.state.total_harga}/>
              </div>
            </div>
          {/* End Menu Checkout */}
          </div>
        </div>
        <Modal populer_data={this.state.populer_data} handlerAdd={this.handlerAdd} pesanan={this.pesananHasil} pesananHarga={this.pesananHasilHarga} />
      </Fragment>
    );
  }
}

export default Main;