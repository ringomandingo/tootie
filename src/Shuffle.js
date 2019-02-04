import React from 'react';
let Shuffle = (props) => {

        return (
            <div className="shufflebtncont" onClick={ props.shuffleHandeler }>
                <div className="button">
                    <div className="buttontext1">Shuffle cards</div>
                    <div className="buttontext2">Shuffle cards</div>
                </div>
            </div>
        )
 }
 export default Shuffle