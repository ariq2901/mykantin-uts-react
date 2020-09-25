import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import Populer from './Populer';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      harga : '',
      image : '',
      jumlah : '',
      name : '',
      pesan : '',
      rating : '',
      waktu : '',
      populer : [],
      pesanan : [],
      total : 0,
      total_harga : '',
    }
  }

  componentDidUpdate(prevProps) {
    if ( this.props.populer_data !== prevProps.populer_data ) {
      this.setState({
        name : this.props.populer_data.name,
        harga : this.props.populer_data.harga,
        jumlah : this.props.populer_data.jumlah,
        rating : this.props.populer_data.rating,
        image : this.props.populer_data.image,
        pesan : this.props.populer_data.pesan
      })
    }
    var pesan = this.state.pesan;
    var harga = this.state.harga;
    var hargaTotal = pesan * harga;
    setTimeout(() => {
      this.setState({
        total_harga : hargaTotal
      })
    }, 100)
  }

  onInput = (e) => {
    e.preventDefault()
    if( e.target.id === "minus" ) {
      this.setState({
        pesan : this.state.pesan - 1,
        jumlah : this.state.jumlah + 1
      })
    } else {
      this.setState({
        pesan : this.state.pesan + 1,
        jumlah : this.state.jumlah - 1
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const total_harga = this.state.total_harga
    const pemesanan = {name: this.state.name,harga: this.state.total_harga,pesan: this.state.pesan,image: this.state.image}
    this.props.pesanan(pemesanan)
    this.props.pesananHarga(total_harga)
  }

  render() {
    return(
      <Fragment>
        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div className="container mod py-3">
                <div className="wrapImage">
                  <img src={this.state.image}/>
                </div>
                <div className="status mt-2">
                  <span className="font-weight-bold">{this.state.name}</span>
                  <div className="rating mt-1">
                    <i className="far fa-star"></i><span>{this.state.rating}</span><span className="ml-5">{this.state.harga}</span>
                  </div>
                </div>
                {/* tombol */}
                <div className="kalkulasi mt-4">
                  <span>Stock : {this.state.jumlah}</span>
                  <div className="penjumlahan">
                    <button type="button" className="btn btn-primary" id="minus" onClick={this.onInput}>-</button>
                    <form onSubmit={this.onSubmit} class="d-inline">
                      <input type="number" name="pesan" class="mx-2" id="totalpesan" value={this.state.pesan} />
                      <button type="button" className="btn btn-primary" id="plus" onClick={this.onInput}>+</button>
                      <button type="submit" className="btn btn-primary ml-4">Pesan</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Modal;