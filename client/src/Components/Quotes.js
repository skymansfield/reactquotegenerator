import React, { Component } from 'react';
import Data from "../quotes.json";
import image from "../assets/images/twitter.png";

let dataset = JSON.stringify(Data);
let parse = JSON.parse(dataset);
let values = Object.values(parse).flat();
let myArr = [];
let quotes = [];
let authors = [];

for (let i = 0; i < values.length; i++) {
  myArr.push(Object.values(values[i]));
}

for (let i = 0; i < myArr.length; i++) {
  quotes.push(myArr[i][0]);
  authors.push(myArr[i][1]);
}

class Quotes extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      index: ""
    };
    this.random = this.random.bind(this);
  }
  componentDidMount() {
    this.setState({
      index: Math.ceil(Math.random() * myArr.length)
    });
  }
  random() {
    this.setState({
      index: Math.ceil(Math.random() * myArr.length)
    });
  }
  render() {
    const q = quotes[this.state.index];
    const a = authors[this.state.index];
    return (
      <div id="quote-box">
        <h1 className='title'>Random Quote Generator</h1>
        <div className="box">
          <h2 id="text">{q}</h2>
          <h2 id="author">{a}</h2>
        </div>
        <button id="new-quote" onClick={this.random}>Click for a new quote!</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet" ><img id="twitter-img" src={image} alt='twitter' /></a>
      </div>
    );
  }
};

export default Quotes;