import React from 'react';

let Popup = (props) => {

        return (

                <div className="cardinfocont" data-link="charpop" onClick={props.modalCloseHandeler}>
                    <div className="closepopup bigclose"></div>
                    <div className="cardinfoint">
                        <div className="closepopup">Close</div>
                        <h1>{props.title}</h1>
                        <p>{props.content}</p>
                    </div>
                </div>
        );

}

export default Popup;