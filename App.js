import React, { Component } from 'react'
import ReactDom from "react-dom"
import Header from './components/Header';
import MemeGenerator from "./components/MemeGenerator"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    )
  }
}
export default  App