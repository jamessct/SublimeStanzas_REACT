var React = require('react');
var ReactDOM = require('react-dom');
var RandomiserButton = require('./RandomiserButton.jsx');

var MainBox = React.createClass({
  getInitialState: function() {
    return {
      quotes: [{ id: 1, quote: "Hope is the thing with feathers / That perches in the soul, / And sings the tune without the words, / And never stops at all", source: "Hope Is The Thing With Feathers", author: "Emily Dickenson"}, { id: 2, quote: "And when wind and winter harden / All the loveless land, / It will whisper of the garden, / You will understand", source: "To My Wife", author: "Oscar Wilde"}, {id: 3, quote: "I wandered lonely as a cloud / That floats on high o'er vales and hills, / When all at once I saw a crowd, / A host of golden daffodils", source: "I wandered lonely as a Cloud", author: "William Wordsworth"}, {id: 4, quote: "Between my finger and my thumb/ The squat pen rests; as snug as a gun.", source: "Digging", author: "Seamus Heaney"}, {id: 5, quote: "Bent double, like old beggars under sacks, / Knock-kneed, coughing like hags, we cursed through sludge, / Till on the haunting flares we turned our backs / And towards our distant rest began to trudge.", source: "Dulce et Decorum est", author: "Wilfred Owen"}, {id: 6, quote: "At twenty I tried to die / And get back, back, back to you. / I thought even the bones would do. / But they pulled me out of the sack, / And they stuck me together with glue.", source: "Daddy", author: "Sylvia Plath"}, {id: 7, quote: "He was my North, my South, my East and West. / My working week and my Sunday rest. / My noon, my midnight, my talk, my song. / I thought that love would last for ever: I was wrong.", source: "Stop all the clocks", author: "WH Auden"}, {id: 8, quote: "The bloody end of the skein / That unravelled your marriage, / Left your children echoing / Like tunnels in a labyrinth", source: "The Minotaur", author: "Ted Hughes"}, {id: 9, quote: "We are the Dead. Short days ago / We lived, felt dawn, saw sunset glow, / Loved and were loved, and now we lie / In Flanders Fields", source: "In Flanders Field", author: "John McCrae"}, {id: 10, quote: "Storm'd at with shot and shell, / Boldly they rode and well, / Into the jaws of Death, / Into the mouth of Hell / Rode the six hundred", source: "The Charge of the Light Brigade", author: "Alfred Lord Tennyson"}, {id: 11, quote: "If you can fill the unforgiving minute / With sixty seconds' worth of distance run - / Yours is the Earth and everything that's in it, / And - which is more - you'll be a Man my son!", source: "If", author: "Rudyard Kipling"}, {id: 12, quote: "I saw the best minds of my generation destroyed by madness, starving hysterical naked, / dragging themselves through the negro streets at dawn looking for an angry fix / angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night", source: "Howl", author: "Allan Ginsberg"}, {id: 13, quote: "Two roads diverged in a wood, and I - / I took the one less traveled by, / And that has made all the difference.", author: "Robert Frost", source: "The Road Not Taken"}, {id: 14, quote: "here is the deepest secret nobody knows / (here is the root of the root and the bud of the bud / and the sky of the sky of a tree called life; which grows /higher than the soul can hope or mind can hide) / and this is the wonder that’s keeping the stars apart / i carry your heart (i carry it in my heart)", author: "EE Cummings", source: "i carry your heart with me"}, {id: 15, quote: "O Captain! my Captain! our fearful trip is done; / The ship has weather’d every rack, the prize we sought is won;", author: "Walt Whitman", source: "O Captain! My Captain!"}, {id: 16, quote: "I stand amid the roar / Of a surf-tormented shore, / And I hold within my hand / Grains of the golden sand-- / How few! yet how they creep / Through my fingers to the deep, / While I weep - while I weep!", author: "Edgar Allan Poe", source: "A Dream Within A Dream"}, {id: 17, quote: "When I am an old woman, I shall wear purple / with a red hat that doesn't go, and doesn't suit me / And I shall spend my pension on brandy and summer gloves / and satin candles, and say we've no money for butter.", source: "Warning", author: "Jenny Joseph"}, {id: 18, quote: "The caged bird sings with a fearful trill / Of things unknown but longed for still / And his tune is heard on the distant hill / For the caged bird sings of freedom.", source: "I Know Why The Caged Bird Sings", author: "Maya Angelou"}, {id: 19, quote: "How do I love thee? Let me count the ways. / I love thee to the depth and breadth and height / My soul can reach, when feeling out of sight / For the ends of being and ideal grace.", source: "How Do I Love Thee?", author: "Elizabeth Barrett Browning"}, {id: 20, quote: "If I should die, think only this of me: / That there's some corner of a foreign field / That is forever England.", source: "The Soldier", author: "Rupert Brooke"}, {id: 21, quote: "I can promise all my heart's devotion; / A smile to chase away your tears of sorrow; / A love that's true and ever growing; / A hand to hold in your's through each tomorrow.", source: "These I Can Promise", author: "Mark Twain"}, {id: 22, quote: "In Xanadu did Kubla Khan / A stately pleasure-dome decree / Where Alph, the sacred river, ran / Through caverns measureless to man / Down to a sunless sea.", source: "Kubla Khan", author: "Samuel Taylor Coleridge"}, {id: 23, quote: "Season of mists and mellow fruitfulness! / Close bosom-friend of the maturing sun; / Conspiring with him how to load and bless / With fruit the vines that round the thatch-eaves run", source: "Ode to Autumn", author: "John Keats"}, {id: 24, quote: "Shall I compare thee to a summer's day? / Thou art more lovely and more temperate", source: "Sonnet 18", author: "William Shakespear"}]
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
    return(
      <div>
        <div id="heading">
          <h1>Sublime Stanzas</h1>
        </div>
        <div id="tagline">
        <h3>Click on the button below to discover some of the most <b><i>poignant</i></b> and <b><i>inspirational</i></b> poetry quotations from throughout history!</h3>
        </div>
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