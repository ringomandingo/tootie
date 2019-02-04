import React, { Component } from 'react';
import './App.css';
import CharacterData from './data/characters.json'
import CharacterDetail from './CharacterDetail'

class Character extends Component {
  render() {
    var random = Math.floor((Math.random() * 100) + 1);
    console.log("secret number from character.js  " + random);

    return (
      <div className="App">
        <div>
          <h1>CHARACTER PAGE</h1>
          {CharacterData.map((item, index)=>{
            return <CharacterDetail card={item} key={item.title}/>
          })}
        </div>
      </div>
    );
  }
}

export default Character;
