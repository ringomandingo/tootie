import React, { Component } from 'react';
import Shuffle from './Shuffle';
import Card from './Card';
import './App.css';

import CharacterData from './data/characters.json'
import ToolData from './data/tools.json'
import PlacesData from './data/places.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      allCards: {
        characters: CharacterData,
        tools: ToolData,
        places: PlacesData
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
      this.shuffleHandeler()
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

  shuffleHandeler = () => {

      let char_card = null;
      let tool_card = null;
      let places_card = null;

      let random_char_card = this.getRandomInt(this.state.allCards.characters.length)


      if(random_char_card > 0){
          char_card = this.state.allCards.characters[random_char_card];
      }

      let random_tool_card = this.getRandomInt(this.state.allCards.tools.length)

      if(random_tool_card > 0){
          tool_card = this.state.allCards.tools[random_tool_card];
      }

      let random_places_card = this.getRandomInt(this.state.allCards.places.length)

      if(random_places_card > 0){
          places_card = this.state.allCards.places[random_places_card];
      }

      let cards = [char_card,tool_card,places_card].filter(x => x)

      this.setState({
          cards: cards
      });
  }

  modalOpenHandeler = () => {
      let audio = new Audio(this.state.audio.tonePopup);
      audio.play();
      this.setState({
          showModal: true
      })
  }

  modalCloseHandeler = () => {
      let audio = this.state.audio.toneClose;

      this.setState({
          showModal: false
      })
  }

  cardClickHandeler = () => {
        let audio = new Audio(this.state.audio.toneOpen);
        audio.crossOrigin = 'anonymous';
        audio.play();

        this.setState((state, props) => ({
            selected: props
        }))

    }

  render() {

    return (

      <div className="App">

        <Shuffle shuffleHandeler = { this.shuffleHandeler } />

        <div className="cardwrap">

          <div className="cardrow">

              {
                  this.state.cards.map(card => (

                      <Card card = { card } cardClickHandeler = { this.cardClickHandeler } key = { card.name } />
              ))
              }

          </div>

        </div>

      </div>
    );
  }
}

export default App;
