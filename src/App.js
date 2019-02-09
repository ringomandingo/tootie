import React, { Component } from 'react';
import Shuffle from './Shuffle';
import Popup from './Popup';
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

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

  shuffleHandeler = () => {

      let char_card = null;
      let tool_card = null;
      let places_card = null;

      let random_char_card = this.getRandomInt(this.state.allCards.characters.length)


      if(this.state.allCards.characters.length > 0){
          char_card = this.state.allCards.characters[random_char_card];
      }

      let random_tool_card = this.getRandomInt(this.state.allCards.tools.length)

      if(this.state.allCards.tools.length > 0){
          tool_card = this.state.allCards.tools[random_tool_card];
      }

      let random_places_card = this.getRandomInt(this.state.allCards.places.length)

      if(this.state.allCards.places.length > 0){
          places_card = this.state.allCards.places[random_places_card];
      }

      let cards = [char_card,tool_card,places_card].filter(x => x)

      cards = this.shuffle(cards)

      this.setState({
          cards: cards
      });
  }

  modalOpenHandeler = () => {

      this.setState({
          showModal: true
      })
  }

  modalCloseHandeler = () => {

      this.setState({
          showModal: false
      })
  }


  render() {

    return (

      <div className="App">

        <Shuffle shuffleHandeler = { this.shuffleHandeler } />

          {(() => {
              switch (this.state.showModal) {
              case true:   return <Popup card = { this.card || {card:{title: "", content: ""}}} />;
              default:      return null ;
              }
          })()}

        <div className="cardwrap">

          <div className="cardrow">

              {

                  this.state.cards.map(card => (

                      <Card card = { card } modalOpenHandeler = { this.modalOpenHandeler } key = { card.name } />
              ))
              }

          </div>

        </div>

      </div>
    );
  }
}

export default App;
