import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col col-3 mt-1">
            <i className="fa fa-bars mx-4" aria-hidden="true"></i>
            MyKantin
          </div>
          <div className="col-5">
            <form>
              <div className="form-group has-feedback">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" className="form-control search" id="search" name="search" placeholder="cari makan?"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;