import Axios from 'axios';
import React, { Component } from 'react';

class Kategori extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
    }
  }
  
  
  categoryHandle = id => {
    console.log('categori handler', id);
    this.props.categoryHandle(id)
  }

  // const catId = id;
  // const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer?category_id=${catId}`;
  // Axios
  // .post(url)
  // .then(filter => {
  //   console.log('filter', filter);
  //   this.setState({
  //     data : filter.data.data
  //   })
  // })
  // .catch(gagal => {
  //   console.log('gagal filter', gagal);
  // })
  
  componentDidMount() {
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/category/3`
    Axios.get(url)
    .then(data => {
      console.log('kategori', data)
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
      <div className="container ml-4">
        <div className="row">
          <div className="atasan">
            <div className="span">
              <span className="htitle">Kategori</span>
            </div>
            <div className="btnoren">
              <button className="btn btn-warning">Lebih lengkap</button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="pembungkus">
            {this.state.data.map((kategori, index) =>
              <button onClick={() => this.categoryHandle(kategori.id)} value={kategori.id} key={kategori.id}>
                <div className="image">
                  <img src={kategori.img}/>
                  <div className="title">{kategori.name}</div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Kategori;