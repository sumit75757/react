import React, { useState } from 'react'
import  io  from "socket.io-client";
import baseURL from "../../service/api.service";
import Message from './Message';
let url:any = baseURL
const socket = io('http://localhost:4000').connect()
function Chat() {
  let obj;
    const [room,setroom]=useState('')
    const [username,setUsername]=useState('')
    function addUser(params:any) {
          obj = {
            username:username,
            room :room,
        }
        socket.emit("join_user",obj)
    }

  return (
    <div>
        <input placeholder='name' name="name" type="text" onChange={(e)=>setUsername(e.target.value)} /><br></br>
        <input placeholder='room' name='room' type="text" onChange={(e)=>setroom(e.target.value)} />
        <button className='btn btn-primary' onClick={addUser} >join room </button>
        <Message username ={username} room={room} socket={socket}/>
    </div>
  )
}

export default Chat