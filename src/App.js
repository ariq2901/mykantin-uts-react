import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Kategori from './component/Kategori';

function App() {
  return (
      <div cassName="container-fluid pt-3">
        <div class="row">
        {/* Menu main */}
          <div className="col col-8"> 
            <div class="row">
              <Navbar />  
            </div>
            <div class="row">
              <Header />
            </div>
            <div class="row">
              <Kategori />
            </div>
          </div>
        {/* End Menu Main   */}
        {/* Menu Checkout */}
          <div className="col col-4">
            <p>on development process...</p>
          </div>
        {/* End Menu Checkout */}
        </div>
      </div>
  );
}

export default App;
