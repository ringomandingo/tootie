import React from 'react';

let Card = (props) => {

        return (
            <div className={"card " + props.card.type + " " + props.card.title } onClick={props.modalOpenHandeler}>

                    <div className="cardint">
                        <div className="cardfront">
                            <div className="flipcolor"></div>
                            <div className="cardimg">
                                <img src={props.card.image} alt={props.card.title}/>
                            </div>
                            <h1 className="cardtitle">{props.card.title} </h1>
                            <div className="moreinfo">
                                Card Info »
                            </div>
                            <div className="cardinfolink" data-link="charpop"></div>
                        </div>
                        <div className="cardback">
                            <h2 className="cardtype">{ props.card.type }</h2>
                        </div>
                    </div>

            </div>
        );
    }

export default Card;