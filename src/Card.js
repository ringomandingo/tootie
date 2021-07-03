import React from 'react';

let isActive = (card, selected) => {
let classes = "";
if(selected != null && selected.title === card.title){
classes = " active";
}
return classes
}

let Card = (props) => {

        return (
            <div  className={"card " + props.card.type.toLowerCase() + " " + props.card.title.toLowerCase().replace(/ /g,"_") } onClick={() => props.cardClickHandeler(props.card)}>

                    <div className="cardint">

                        {(() => {
                            switch (props.card != props.selected ) {
                            case true:   return <div className="cardback" id={ props.card.title.toLowerCase().replace(/ /g,"_") }>
                            <h2 className="cardtype">{ props.card.type }</h2></div>;
                            default: return  <div className="cardfront">
                                <div className="flipcolor"></div>
                                <div className="cardimg">
                                    <img src={props.card.image} alt={props.card.title} />
                                </div>
                                <h1 className={"cardtitle" +  isActive( props.card,props.selected ) }>{props.card.title} </h1>
                                <div className="moreinfo">
                                    Card Info »
                                </div>
                                <div className="cardinfolink" ></div>
                            </div> ;
                            }
                        })()}

                    </div>

            </div>
        );
    }

export default Card;