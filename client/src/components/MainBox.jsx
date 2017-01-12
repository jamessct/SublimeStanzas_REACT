var React = require('react');
var ReactDOM = require('react-dom');
var RandomiserButton = require('./RandomiserButton.jsx');

var MainBox = React.createClass({
  getInitialState: function() {
    return {
      quotes: [{ id: 1, quote: "Hope is the thing with feathers / That perches in the soul, / And sings the tune without the words, / And never stops at all", source: "Hope Is The Thing With Feathers", author: "Emily Dickenson"}, { id: 2, quote: "And when wind and winter harden / All the loveless land, / It will whisper of the garden, / You will understand", source: "To My Wife", author: "Oscar Wilde"}, {id: 3, quote: "I wandered lonely as a cloud / That floats on high o'er vales and hills, / When all at once I saw a crowd, / A host of golden daffodils", source: "I wandered lonely as a Cloud", author: "William Wordsworth"}, {id: 4, quote: "Between my finger and my thumb/ The squat pen rests; as snug as a gun.", source: "Digging", author: "Seamus Heaney"}, {id: 5, quote: "Bent double, like old beggars under sacks, / Knock-kneed, coughing like hags, we cursed through sludge, / Till on the haunting flares we turned our backs / And towards our distant rest began to trudge.", source: "Dulce et Decorum est", author: "Wilfred Owen"}, {id: 6, quote: "At twenty I tried to die / And get back, back, back to you. / I thought even the bones would do. / But they pulled me out of the sack, / And they stuck me together with glue.", source: "Daddy", author: "Sylvia Plath"}, {id: 7, quote: "He was my North, my South, my East and West. / My working week and my Sunday rest. / My noon, my midnight, my talk, my song. / I thought that love would last for ever: I was wrong.", source: "Stop all the clocks", author: "WH Auden"}, {id: 8, quote: "The bloody end of the skein / That unravelled your marriage, / Left your children echoing / Like tunnels in a labyrinth", source: "The Minotaur", author: "Ted Hughes"}, {id: 9, quote: "We are the Dead. Short days ago / We lived, felt dawn, saw sunset glow, / Loved and were loved, and now we lie / In Flanders Fields", source: "In Flanders Field", author: "John McCrae"}, {id: 10, quote: "Storm'd at with shot and shell, / Boldly they rode and well, / Into the jaws of Death, / Into the mouth of Hell / Rode the six hundred", source: "The Charge of the Light Brigade", author: "Alfred Lord Tennyson"}]
    }
  },

  getRandomQuote: function(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  },

  render: function() {
    var randomisedArray = this.getRandomQuote(this.state.quotes);
    var randomObject = randomisedArray[1];
    var randomNumber = randomObject.id;
    console.log(randomObject.id)
    return(
      <div>
        <h1>Sublime Stanzas</h1>
        <h3>Click on the button below to discover some of the most <b><i>poignant</i></b> and <b><i>inspirational</i></b> poetry quotations from throughout history!</h3>
        <RandomiserButton 
          quotes={this.state.quotes}
          randomisedArray={randomisedArray}
          randomNumber={randomNumber}>
        </RandomiserButton>
      </div>
    )
  }
})

module.exports = MainBox;