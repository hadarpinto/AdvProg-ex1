import React from 'react';
function MsgBubble(props) {
const bubbleSide = props.side ? 'chat-bubble--right' : 'chat-bubble--left';
const offset = props.side ? ' offset-md-9' : '';
const msg = props.contain;
const type = props.type;

    return (
        <div className="row no-gutters">
            <div className={"col-md-3" + offset}>
                <div className={"chat-bubble " + bubbleSide}>
                    {msg}
                </div>
            </div>
        </div>)
}

export default MsgBubble;