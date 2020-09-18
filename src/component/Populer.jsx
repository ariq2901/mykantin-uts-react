import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import Main from '../Main';

class Populer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
      updateByName : '',
      id_makanan : this.props.makanan_id
    }
  }

  onPopulerChange = populer => {
    console.log(populer);
    this.props.onPopulerChange(populer)
  }

  onBasedCategory = () => {
    const catId = this.id_makanan;
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer?category_id=${catId}`;
    Axios
    .post(url)
    .then(filter => {
      console.log('filter', filter);
      this.setState({
        data : filter.data.data
      })
    })
    .catch(gagal => {
      console.log('gagal filter', gagal);
    })
  }

  componentDidMount() {
    console.log(this.state.updateByName);
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`
    Axios.get(url)
    .then(data => {
      console.log('populer', data)
      this.setState({
        data : data.data.data,
      })
    })
    .catch(gagal => {
      console.log('gagal fetch data', gagal)
    })
  }

  

  render() {
    return(
      <Fragment>
      <div className="container ml-4 mt-5">
        <div className="row">
          <div className="atasan">
            <div className="span">
              <span className="htitle">Populer</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="pembungkus">
            {this.state.data.map((populer, index) => 
              <div className="pembungkus2 mt-5" key={index}>
                <button type="button" className="btnImage" value={populer.name} onClick={() => {this.onPopulerChange(populer)}} data-toggle="modal" data-target="#exampleModal">
                <div className="imagep">
                  <img src={populer.image} />
                  <div className="durasi">
                    <span>{populer.waktu}</span>
                  </div>
                </div>
                </button>
                <div className="status mt-2">
                  <span className="font-weight-bold">{populer.name}</span>
                  <div className="rating mt-1">
                    <i className="far fa-star"></i><span>{populer.rating}</span><span className="ml-5">Rp{populer.harga}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}
export default Populer