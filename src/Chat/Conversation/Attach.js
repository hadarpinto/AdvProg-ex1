import React from 'react';
import './Attach.css';




function Attach(props) {
    var today = new Date();
    var messageTime = today.getHours() + ':' + today.getMinutes();

    var inputVal = ''
    function getInputValue() {
        inputVal = document.getElementById("myInput").value;
    }

    function sendMsg() {
        getInputValue();
        if (inputVal == '') {
            return;
        }
        var newChat = props.log;
        newChat.push({ side: true, type: 'text', contain: inputVal, time : messageTime })
        props.setLog(newChat);
        if (props.bool === false) {
            props.setbool(true)
        }
        else {
            props.setbool(false)
        }
        document.getElementById("myInput").value = '';
    }

    function handleClick() {
        sendMsg();
    }

    const handleKey = (e) => {
        if (e.key === "Enter") {
            sendMsg();
        }
    }



    return (
        <div className='input-wrapper'>
            <div className="input-group mb-3 dropup">
                <button className="btn btn-outline-secondary"
                    type="button" id="button-addon1" size='40'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"></path>
                    </svg>
                </button>
                <input type="text" className="form-control" placeholder="Enter Message"
                    onKeyDown={handleKey}
                    id='myInput'
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"></input>
                <div className='icon-send'
                    onClick={handleClick}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default Attach;