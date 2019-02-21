import React, { Component } from 'react'
// import { threadId } from 'worker_threads';

export default class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
          topText: "",
          bottomText: "",
          randomImg: "https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg",
          allMemeImgs: [],
          ranNum:"",
          rendMemeImg:""

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount (){
      fetch("https://api.imgflip.com/get_memes")
              .then(response => response.json())
              .then(response => {
                console.log(response)
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
              })
    }
    handleChange(event){
      const {name, value} = event.target
      this.setState({ [name] : value })
    }
    handleSubmit(event){
      event.preventDefault()
      const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
      const randMemeImg = this.state.allMemeImgs[randNum].url
      this.setState({randomImg: randMemeImg})
    }
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input 
            type="text" name="topText" 
            value={this.state.topText} 
            placeholder="Top text"
            onChange={this.handleChange}
           />
          <input 
            type="text" 
            name="bottomText" 
            value={this.state.bottomText} 
            placeholder="Bottom text"
            onChange={this.handleChange}
            />
          <button>Gen</button>
        </form>
        <div>
            <img style={slika} src={this.state.randomImg} alt="" />
            <h2>{this.state.topText }</h2>
            <h2>{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}
const slika = {
  width: '500px',
}