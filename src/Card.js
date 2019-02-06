import React from 'react';

let Card = (props) => {

        return (
            <div className={"card character char_" + props.card.name } onClick={props.cardClickHandeler}>

                    <div className="cardint">
                        <div className="cardfront">
                            <div className="flipcolor"></div>
                            <div className="cardimg">
                                <img src={props.card.image} alt={props.card.title}/>
                            </div>
                            <h1 className="cardtitle">{props.card.title} test </h1>
                            <div className="moreinfo">
                                Card Info »
                            </div>
                            <div className="cardinfolink" data-link="charpop"></div>
                        </div>
                        <div className="cardback" id="poopie">
                            <h2 className="cardtype">{ props.card.type }</h2>
                        </div>
                    </div>

            </div>
        );
    }

export default Card;