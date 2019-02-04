import React from 'react';

let Card = (props) => {

        return (
            <div className={"card character char" + props.randChar.id } onClick={props.cardClickHandeler}>

                    <div className="cardint">
                        <div className="cardfront">
                            <div className="flipcolor"></div>
                            <div className="cardimg">
                                <img src={props.randChar.image} alt={props.randChar.title}/>
                            </div>
                            <h1 className="cardtitle">{props.randChar.title}</h1>
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
        );
    }

export default Card;