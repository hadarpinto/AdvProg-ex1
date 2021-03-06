import React from 'react';
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
                    {type === "text" &&<div>{msg}</div>}
                    {type === "imageMsg" && <div className={type}><img alt='' src={msg}></img></div>}
                    {type === "videoMsg" && <div className={type}><video controls src={msg}  type="video/mp4"></video></div>}
                    {type === "audioMsg" && <div className={type}><audio controls><source src={msg} type="audio/ogg"></source></audio></div>}
                    <div className='timebubble'>{time}</div>
                </div>
            </div>
        </div>)
}

export default MsgBubble;
