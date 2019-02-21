import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class Header extends Component {
  render() {
    return (
      
        <header >
          <img style={slika} src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
          alt="Problem?"
          />
          <p>Meme Generator</p>
        </header>
      
    )
  }
}
const slika = {
  width: '50px',
}
