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
    }
  }

  componentDidUpdate(prevProps) {
    // if( this.props.name !== prevProps.name ) {
    //   console.log('props name', this.props.name);
    //   const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/`;
    //   const payload = {
    //     category_id : this.props.name
    //   }
    //   console.log('payload', payload);
    //   Axios
    //   .post(url, payload)
    //   .then(satuan => {
    //     console.log('satuan', satuan);
    //     // this.setState({
    //     //   data : sa
    //     // })
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //   })
    // }
  }

  render() {
    return(
      <Fragment>
        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
            {console.log('dari modal name', this.props.name)}
              <div className="container mod py-3">
                <div className="wrapImage">
                  <img src={this.props.name[5]} alt=""/>
                </div>
                <div className="status mt-2">
                  <span className="font-weight-bold">{this.props.name[0]}</span>
                  <div className="rating mt-1">
                    <i className="far fa-star"></i><span>4.7</span><span className="ml-5">{this.props.name[1]}</span>
                  </div>
                </div>
                {/* tombol */}
                <div className="kalkulasi mt-4">
                  <span>Stock : {this.props.name[3]}</span>
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