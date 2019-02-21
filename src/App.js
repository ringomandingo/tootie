import React, { Component } from 'react';
import Shuffle from './Shuffle';
import Popup from './Popup';
import Cards from './Cards';
import Loading from './Loading';
import './App.css';

import CharacterData from './data/characters.json'
import ToolData from './data/tools.json'
import PlacesData from './data/places.json'

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      deck: {
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
      sleep(1500).then(() => {
          this.shuffleHandeler()
      })

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

      let random_char_card = this.getRandomInt(this.state.deck.characters.length)


      if(this.state.deck.characters.length > 0){
          char_card = this.state.deck.characters[random_char_card];
      }

      let random_tool_card = this.getRandomInt(this.state.deck.tools.length)

      if(this.state.deck.tools.length > 0){
          tool_card = this.state.deck.tools[random_tool_card];
      }

      let random_places_card = this.getRandomInt(this.state.deck.places.length)

      if(this.state.deck.places.length > 0){
          places_card = this.state.deck.places[random_places_card];
      }

      let cards = [char_card,tool_card,places_card].filter(x => x)

      cards = this.shuffle(cards)

      this.setState({
          cards: cards
      });
  }

  modalOpenHandeler = (card) => {
      this.setState({
          selected: card,
          showModal: true
      })
  }

  modalCloseHandeler = () => {

      this.setState({
          showModal: false
      })
  }
    cardClickHandeler = (card) => {

    let show = false

        if(this.state.selected == card){
        show = true;
        }

      this.setState({
         selected: card,
          showModal: show
      })
  }


  render() {

    return (

      <div className="App">

          {(() => {
              switch (this.state.cards.length > 0) {
              case true:   let props = {
                  shuffleHandeler:this.shuffleHandeler,
                  cardClickHandeler: this.cardClickHandeler,
                  cards: this.state.cards,
                  selected: this.state.selected ,
                  showModal: this.state.showModal
              }

              return         <>
              <Shuffle shuffleHandeler = { props.shuffleHandeler } />

              {(() => {
                  switch (props.showModal && props.selected !== null) {
                  case true:   return <Popup card = { props.selected } />;
                  default:      return null ;
                  }
              })()}
              <Cards { ...props } />;
              </>;
              default: return  <Loading />
              }
          })()}
 </div>
    );
  }
}

export default App;
