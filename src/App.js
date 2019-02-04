import React, { Component } from 'react';
import Shuffle from './Shuffle';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      allCards: {
        characters: [],
        tools: [],
        places: []
      },
      cards: [],
      showModal: false,
      audio: {
        toneOpen: "./audio/open2.mp3",
        toneClose: "./audio/closed5.mp3",
        tonePopup: "./audio/popup3.mp3"
      }
    };
  }
  componentDidMount() {
  let cards = [];
  let all_cards =  {
      characters: [],
      tools: [],
      places: []
      };

      this.setState({
          cards: cards, allCards: all_cards
      });
  }

  cardClickHandeler = () => {
      let audio = this.state.audio.toneOpen;
      audio.play();
      audio.volume = 0.5;
      this.setState((state, props) => ({
          selected: props
      }))

  }

    getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

  shuffleHandeler = () => {

      let random = this.getRandomInt(this.state.allCards.characters.length)
      let char_card = null;
      let tool_card = null;
      let places_card = null;

      if(random > 0){
          char_card = this.allCards.characters[random];
      }


      let random2 = this.getRandomInt(this.state.allCards.tools.length)
      if(random2 > 0){
          tool_card = this.allCards.tools[random];
      }


      let random3 = this.getRandomInt(this.state.allCards.places.length)
      if(random3 > 0){
          places_card = this.allCards.places[random];
      }


      let cards = [char_card,tool_card,places_card]

      this.setState({
          cards: cards
      });
  }

  modalOpenHandeler = () => {
      let audio = this.state.audio.tonePopup;
      audio.play();
      audio.volume = 0.5;
      this.setState({
          showModal: true
      })
  }

  modalCloseHandeler = () => {
      let audio = this.state.audio.toneClose;
      audio.play();
      audio.volume = 0.5;
      this.setState({
          showModal: false
      })
  }

  render() {

    return (

      <div className="App">

        <Shuffle shuffleHandeler = { this.shuffleHandeler }/>

        <div className="cardwrap">

          <div className="cardrow">



          </div>





        </div>

      </div>
    );
  }
}

export default App;
