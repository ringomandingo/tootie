import React from 'react';

let Popup = (props) => {


        return (
            <div className="info popups">
                <div className="cardinfocont" data-link="charpop" onClick={props.modalCloseHandeler}>
                    <div className="closepopup bigclose"></div>
                    <div className="cardinfoint">
                        <div className="closepopup">Close</div>
                        <h1>{props.card.title }</h1>
                        <p>{props.card.content}</p>
                    </div>
                </div>
                </div>
        );

}

export default Popup;