import React from 'react';
import Attach from './Conversation/Attach';
import './ChatBox.css';
import './LeftSide/LeftSide.js';
import LeftSide from './LeftSide/LeftSide.js';
import TopConv from './Conversation/TopConv';
import ChatLog from './Conversation/ChatLog';
import { useState } from 'react';
import { contacts , data } from './hooks/Storage.js';
function ChatBox(props) {
    var indexContacts = contacts.findIndex((user) => { return user.name == props.currentUser });
    console.log(contacts);
    var indexData = data.findIndex((user) => { return user.name == props.currentUser });
    console.log('indexcontacts', indexData);
    console.log('cu', props.currentUser);

    const [refresh, setRefresh] = useState(false);
    const [contactList, setContactList] = useState([]);
    const [dataBase, setDataBase] = useState(data[indexData].info);
    const [selectedChat, setSelectedChat] = useState(data[indexData].info[0].chat);
    const [contactResult, setContactResult] = useState(contactList);
    const [currentUser, setCurrentUser] = useState(contacts[indexContacts]);
    const [currentActiveUserChat, setCurrentActiveUserChat] = useState(contacts[indexContacts].displayName);
    const [isJustLoggedIn, setIsJustLoggedIn] = useState(true);

    if (contactList.length < 1) {
        for (let i = 0; i < data[indexData].contacts.length; i++) {
            let j = contacts.findIndex((user) => { return user.name == data[indexData].contacts[i]});
            var newContactList = contactList;
            newContactList.push(contacts[j]);
            setContactList(newContactList);
        }
    }

    const doSearch = function (query) {
        setContactResult(contactList.filter((contact) => contact.name.includes(query)));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <LeftSide choose={setSelectedChat} currentUser={currentUser}
                        contactList={contactList} addContact={setContactList}
                        dataBase={dataBase} setDataBase={setDataBase}
                        doSearch={doSearch} contactResult={contactResult}
                        refresh={refresh} setRefresh={setRefresh}
                        setCurrentActiveUserChat={setCurrentActiveUserChat}
                        setIsJustLoggedIn={setIsJustLoggedIn} />
                </div>
                <div className="col-8">
                    <TopConv contactList={contactList} currentActiveUserChat={currentActiveUserChat} />
                    <ChatLog log={selectedChat} isJustLoggedIn={isJustLoggedIn}/>
                    <Attach log={selectedChat} setLog={setSelectedChat} bool={refresh} setbool={setRefresh} />
                </div>
            </div>
        </div>
    )
}

export default ChatBox;