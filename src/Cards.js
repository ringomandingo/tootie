import React from 'react';
import Card from './Card';

let Cards = (props) =>{

    return (
        <div className="cardwrap">

        <div className="cardrow">

            {

                props.cards.map((card,index) => (

                    <Card card = { card }  key = { index } selected =  { props.selected } cardClickHandeler = { props.cardClickHandeler }/>
                ))
            }

        </div>

    </div>
    );
}

export default Cards;