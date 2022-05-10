import React, { useEffect, useState } from 'react'

function Message({username,room,socket}:any) {
    const [messages,setmessage]=useState('')
    const [messageList, setMessageList] = useState([]);

    //console.log({username,room,socket});
    
    
    const [textData, setTextData] = useState([]);

   useEffect(() => {
      socket.on('chat message', (text:any)  =>  {
         setTextData(text);
         console.log(textData);
      });
   },[socket]);
    
    

    
    function sendmessage() {
        const message = {
            usename:username,
            room:room,
            message:messages
        }
        socket.emit('sendMessage',message)
    }
  return (
    <div>
        <br />
        <br />
        <br />
        <input placeholder='Message' name='Message' type="text" onChange={(e)=>setmessage(e.target.value)} />
        <button className='btn btn-primary' onClick={sendmessage} >sendChat</button>
    </div>
  )
}

export default Message