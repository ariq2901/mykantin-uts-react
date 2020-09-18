import React, { Component } from 'react';
import PImage from '../img/person.jpg'

class Person extends Component {
  render() {
    return(
      <div className="container box">
        <i className="fa fa-heart" aria-hidden="true"></i>
        <i className="fa fa-cloud ml-4" aria-hidden="true"></i>
        <div className="person ml-4">
          <img src={PImage}/>
        </div>
      </div>
    );
  }
}
export default Person;