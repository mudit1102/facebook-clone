import './App.css';
import React, {useState, useEffect} from 'react';
import { FormControl , Input, InputLabel} from '@material-ui/core'
import Message from './Message';
import db from './fire';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App(){

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').
    onSnapshot(snapshot => {setMessages(snapshot.docs.map(doc => ({id: doc.id , message:doc.data() }) ))});
  }, [])

  useEffect(() => {
   setUsername(prompt('Please Enter Your Name'));
  }, [])

  const sendMessages = (event) =>{
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }

    return (
      <div className="App">
      <img src="https://ndassistive.org/wp-content/uploads/2020/05/Messenger-logo.png"/>
      <h1>Hello</h1>
      <h2>{username}</h2>
      <form className="app__form">
      <FormControl className="app__formControl">
    
      <Input classsName="app__input" placeholder='Enter a message..' value={input} onChange={event => setInput(event.target.value)}/>

        <IconButton className="app__iconButton" disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessages}>
        
          <SendIcon/>
        </IconButton>
      </FormControl>
      </form>

      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username= {username} message={message} />
 
        ))
      }
      </FlipMove>
      </div>
    );

}

export default App;
