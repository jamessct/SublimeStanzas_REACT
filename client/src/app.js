var React = require('react');
var ReactDOM = require('react-dom');
var MainBox = require('./components/MainBox.jsx');

window.onload = function() {
  ReactDOM.render(
    <MainBox></MainBox>,
    document.getElementById('app')
  );
}