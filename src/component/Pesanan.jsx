import React, { Component } from 'react';
import Swal from 'sweetalert';

class Pesanan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list : [],
      checkout : '',
      harga : '',
      total_bayar : [],
      pembayaran : 0,
      jumlah : false,
      saldo_akhir : 2000000,
    }
  }

  componentDidUpdate(prevProps) {
    if ( this.props.checkout !== prevProps.checkout ) {
      this.setState({
        checkout : this.props.checkout
      })
      this.onAddItem();
    }
    if ( this.props.checkout !== prevProps.checkout ) {
      var bayarLama = this.state.total_bayar
      var bayarBaru = this.props.totalHarga
      this.setState({
        harga : this.props.totalHarga
      })
      this.onAddHarga();
    }
    setTimeout(() => {
      var bayar = this.state.total_bayar;
      function penjumlahan(total, num) {
        return total + num;
      }
      if( bayar.length > 1 ) {
        var ariq = bayar.reduce(penjumlahan);
      } else {
        var ariq = this.state.total_bayar
      }
      var total = ariq;
      
      
      this.setState({
        pembayaran : total,
        jumlah : false
      })
    }, 100)
  }

  onAddHarga = () => {
    this.setState(state => {
      const total_bayar = state.total_bayar.concat(state.harga);

      return {
        total_bayar,
        harga : '',
      }
    })
  }

  onAddItem = () => {
    this.setState(state => {
      const list = state.list.concat(state.checkout);

      return {
        list,
        checkout : '',
      };
    });
  }

  onRemoveItem = name => {
    this.setState(state=> {
      const list = state.list.filter(data => data.name !== name);
      
      return {
        list
      }
    })
  }
  
  onRemoveBills = harga => {
    this.setState(state => {
      const total_bayar = state.total_bayar.filter(data => data !== harga);
  
      return {
        total_bayar
      }
    })
  }

  onClear = () => {
    if (this.state.pembayaran > 0) {
      this.potongSaldo();
      this.setState({
        list : [],
        checkout : '',
        harga : '',
        total_bayar : [],
        pembayaran : 0,
        jumlah : false
      })
      Swal("Pesanan berhasil dipesan", "total pembayaran " + this.numSeparator(this.state.pembayaran), "success")
    } else {
      Swal("Transaksi gagal", "pesan minimal 1 barang", "error")
    }
  }

  potongSaldo() {
    var saldoAkhir = this.state.saldo_akhir - this.state.pembayaran;
    this.setState({ saldo_akhir : saldoAkhir })
  }
  

  numSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return(
      <div className="container pesanan">
        <div className="row">
          <h3>Pesanan Saya</h3>
          <div className="balance">
            <span className="nama">Mr. Anto</span>
            <span className="saldo">{this.numSeparator(this.state.saldo_akhir)}</span>
            <span className="id">478576********98038</span>
          </div>
        </div>
        <div className="row">
          {this.state.list.map((data, index) =>
            <div className="checkout" key={index}>
              <div className="imgBrand">
                <img src={data.image}/>
              </div>
              <span>{data.pesan}</span>
              <span>x</span>
              <span className="font-weight-bold">{data.name}</span>
              <span>{this.numSeparator(data.harga)}</span>
              <button onClick={() => {this.onRemoveItem(data.name);this.onRemoveBills(data.harga)}}><i class="fas fa-times fa-large"></i></button>
            </div>
          )}
        </div>
        <div className="row">
          <div className="alamat">
          <i class="fas fa-car"></i>
          <span>Depok</span>
          <span>Gratis</span>
          </div>
        </div>
        <div className="row">
          <div className="bayar">
            <span>Total</span>
            <span>Rp. {this.numSeparator(this.state.pembayaran)}</span>
          </div>
        </div>
        <div className="row final">
          <button type="button" onClick={this.onClear} className="btn btn-warning btn-pesan">Pesan</button>
        </div>
      </div>
    );
  }
}
export default Pesanan;