var React = require('react');
var ReactDOM = require('react-dom');

var Quote = React.createClass({
  output: function() {
    // if({this.props.quoteVisibility === true}) {
    //   return "<p>" + {this.randomQuote.quote} + "</p>";
    // } else
    // return "";
  },

  render: function() {
    var randomQuote = this.props.randomisedArray[0];
    if(this.props.quoteVisibility === true) {
      return(
        <div id="output">
          <p>"{randomQuote.quote}"</p>
          <p>-Taken from <i>{randomQuote.source}</i>, by <b>{randomQuote.author}</b>.</p>
        </div>
      ) 
    }
    if(this.props.quoteVisibility === false) {
      return (
        <div></div>
      )
    }
  }
})

module.exports = Quote;