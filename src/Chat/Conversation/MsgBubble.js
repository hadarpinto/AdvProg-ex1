import React from 'react';
import { useState } from 'react';
import './MsgBubble.css';
function MsgBubble(props) {
const bubbleSide = props.side ? 'chat-bubble--right' : 'chat-bubble--left';
const offset = props.side ? ' offset-md-9' : '';
const msg = props.contain;
const type = props.type;
const time = props.time;

    return (
        <div className="row no-gutters">
            <div className={"col-md-3" + offset}>
                <div className={"chat-bubble " + bubbleSide}>
                <div className="textMsg"></div>
                <div className="imageMsg"><img src="person1.jpg"></img></div>
                <div className="videoMsg"></div>
                <div className="audioMsg"></div>
                <div className='timebubble'>{time}</div>
                </div>
            </div>
        </div>)
}

export default MsgBubble;

// return (
//     <div className="row no-gutters">
//         <div className={"col-md-3" + offset}>
//             <div className={"chat-bubble " + bubbleSide}>
//             <div>{msg}</div>
//             <div className='timebubble'>{time}</div>
//             </div>
//         </div>
//     </div>)