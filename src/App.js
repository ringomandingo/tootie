import React, { Component } from 'react';
import './App.css';
import CharacterData from './data/characters.json'
import ToolData from './data/tools.json'
import PlacesData from './data/places.json'
import $ from 'jquery'
import toneopen from './audio/open2.mp3'
import toneclose from './audio/closed5.mp3'
import tonepopup from './audio/popup3.mp3'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffle: [],
      charFlip: []
    };
  }
  componentDidMount() {
    $(".card").click(function(){
      $(this).addClass("active");
    });
    $(".character .cardback").click(function(){
      var audio = $("#mysoundclip1")[0];
      audio.play();
      audio.volume = 0.5;
    });
    $(".tools .cardback").click(function(){
      var audio = $("#mysoundclip2")[0];
      audio.play();
      audio.volume = 0.5;
    });
    $(".places .cardback").click(function(){
      var audio = $("#mysoundclip3")[0];
      audio.play();
      audio.volume = 0.5;
    });
    $(".cardinfolink").click(function(){
      $('.cardinfocont[data-link=' + $(this).data('link') + ']').addClass('active');
      var audio = $("#popupsound")[0];
      audio.play();
      audio.volume = 0.5;
    });
    $(".closepopup").click(function(){
      $(".cardinfocont").removeClass("active");
      var audio = $("#closeaudio")[0];
      audio.play();
      audio.volume = 0.5;
    });
  }

  render() {
    const characterCard = Object.values(CharacterData)
    const randChar = characterCard[parseInt(Math.random() * characterCard.length)]

    const toolCard = Object.values(ToolData)
    const randTool = toolCard[parseInt(Math.random() * toolCard.length)]

    const placesCard = Object.values(PlacesData)
    const randPlaces = placesCard[parseInt(Math.random() * placesCard.length)]

    var random = Math.floor((Math.random() * 100) + 1);
    console.log("secret number from app.js  " + random);

    /* Shuffle Button */
    function shuffle(e) {
      e.preventDefault();
      console.log("Page was refreshed!");
      window.location.reload();
    }

    var poop = "my browniessss";
    console.log(poop)


    return (

      <div className="App">
        <audio id="mysoundclip1" preload="auto">
          <source src={toneopen}/>
        </audio>
        <audio id="mysoundclip2" preload="auto">
          <source src={toneopen}/>
        </audio>
        <audio id="mysoundclip3" preload="auto">
          <source src={toneopen}/>
        </audio>
        <audio id="closeaudio" preload="auto">
          <source src={toneclose}/>
        </audio>
        <audio id="popupsound" preload="auto">
          <source src={tonepopup}/>
        </audio>

        <div className="shufflebtncont" onClick={shuffle.bind(this)}>
          <div className="button">
            <div className="buttontext1">Shuffle cards</div>
            <div className="buttontext2">Shuffle cards</div>
          </div>
        </div>

        <div className="cardwrap">
          <div className="loadingcont">
            <div className="loadingtext">
              The Deck of Character
              <div>
              <i>preparing cards</i>
              </div>
            </div>
          </div>

          <div className="cardrow">

            <div className={"card character char" + randChar.id}>
              <div className="cardint">
                <div className="cardfront">
                  <div className="flipcolor"></div>
                  <div className="cardimg">
                    <img src={randChar.image} alt={randChar.title}/>
                  </div>
                  <h1 className="cardtitle">{randChar.title}</h1>
                  <div className="moreinfo">
                    Card Info »
                  </div>
                  <div className="cardinfolink" data-link="charpop"></div>
                </div>
                <div className="cardback" id="poopie">
                  <h2 className="cardtype">Character</h2>
                </div>
              </div>
            </div>

            <div className={"card tools tool" + randTool.id}>
              <div className="cardint">
                <div className="cardfront">
                  <div className="flipcolor"></div>
                  <div className="cardimg">
                    <img src={randTool.image} alt={randTool.title}/>
                  </div>
                  <h1 className="cardtitle">{randTool.title}</h1>
                  <div className="moreinfo">
                    Card Info »
                  </div>
                  <div className="cardinfolink" data-link="toolpop"></div>
                </div>
                <div className="cardback" id="poopie">
                  <h2 className="cardtype">Tool</h2>
                </div>
              </div>
            </div>

            <div className={"card places place" + randPlaces.id}>
              <div className="cardint">
                <div className="cardfront">
                  <div className="flipcolor"></div>
                  <div className="cardimg">
                    <img src={randPlaces.image} alt={randPlaces.title}/>
                  </div>
                  <h1 className="cardtitle">{randPlaces.title}</h1>
                  <div className="moreinfo">
                    Card Info »
                  </div>
                  <div className="cardinfolink" data-link="placepop"></div>
                </div>
                <div className="cardback" id="poopie">
                  <h2 className="cardtype">Place</h2>
                </div>
              </div>
            </div>

          </div>

          <div className="info popups">

            <div className="cardinfocont" data-link="charpop">
              <div className="closepopup bigclose"></div>
              <div className="cardinfoint">
                <div className="closepopup">Close</div>
                <h1>{randChar.title}</h1>
                <p>{randChar.content}</p>
              </div>
            </div>

            <div className="cardinfocont" data-link="toolpop">
              <div className="closepopup bigclose"></div>
              <div className="cardinfoint">
                <div className="closepopup">Close</div>
                <h1>{randTool.title}</h1>
                <p>{randTool.content}</p>
              </div>
            </div>

            <div className="cardinfocont" data-link="placepop">
              <div className="closepopup bigclose"></div>
              <div className="cardinfoint">
                <div className="closepopup">Close</div>
                <h1>{randPlaces.title}</h1>
                <p>{randPlaces.content}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
