import React, { Component } from 'react';
import HImage from '../img/header.png';

class Header extends Component {

  render() {
    return(
      <div className="container header ml-4 my-3">
        <div className="ovheader">
          <img src={HImage} className="himage"/>
        </div>
      </div>
    );
  }
}
export default Header;