import React, { Component } from 'react';

class Popup extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {

        return (

                <div className="cardinfocont" data-link="charpop">
                    <div className="closepopup bigclose"></div>
                    <div className="cardinfoint">
                        <div className="closepopup">Close</div>
                        <h1>{randChar.title}</h1>
                        <p>{randChar.content}</p>
                    </div>
                </div>
        );
    }
}

export default Popup;