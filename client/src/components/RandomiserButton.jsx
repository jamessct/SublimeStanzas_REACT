var React = require('react');
var ReactDOM = require('react-dom');
var Quote = require('./Quote.jsx');

var RandmomiserButton = React.createClass({
  getInitialState: function() {
    return {quoteVisibility: false, randomID: 0};
  },

  getRandomNumber: function(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  },

  newQuote: function(event) {
    var randomisedArray = this.getRandomNumber(this.props.quotes);
    var randomObject = randomisedArray[1];
    var randomNumber = randomObject.id;
    this.setState({quoteVisibility: true});
    this.setState({reset: this.props.randomNumber});
    console.log(this.state.reset)
  },

  render: function() {
    return(
      <div>
        <div id="button">
          <button id="NewQuote" onClick={this.newQuote}>discover</button>
        </div>
        <Quote id="wtf"
          randomisedArray={this.props.randomisedArray}
          quoteVisibility={this.state.quoteVisibility}></Quote>
      </div>
    )
  }
})

module.exports = RandmomiserButton;