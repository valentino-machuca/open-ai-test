import React, { useState } from 'react';
import s from './styles.module.scss';

import { BiSend } from "react-icons/bi";
import Message from '../Message';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const onSendMessage = () => {
    setMessages(prev => ([...prev, {response: false, message: input}]))
    setInput("");
  }


  return (
    <div className={s.container}>
        <div className={s.messages}>
          {
            messages.map((item, key) => <Message key={key} response={item.response} message={item.message}/>)
          }
          <div id="endmessages"/>
        </div>

        <div className={s.input_box}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className={s.input} placeholder='Escribe tu mensaje...'/>
            <button className={s.button} onClick={() => onSendMessage()} disabled={!input}><BiSend size='1.3em'/></button>
        </div>
    </div>
  )
}

export default Chat;