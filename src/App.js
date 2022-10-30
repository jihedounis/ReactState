import './App.css';
import React, { Component } from 'react';
import Count from "./Component/count.js";
class App extends Component {
  state = {
    fullName: 'Jihed Ounis',
    bio: 'full stack web developer',
    imgSrc: 'https://i.postimg.cc/cCcjT8V6/301238514-3299541836960843-1298940158327304747-n.jpg',
    profession: 'Web Developer & Graphic designer',
    show: false
  }
  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div className="Contain" >
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )
        }
        <button onClick={this.handleShow}>{!this.state.show ? "show" : "hide"}</button>
        <>
        <h1>Show the counter </h1>
        <Count />
        </>
      </div>
      </div>
    )
    
  };
}

export default App;