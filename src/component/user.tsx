import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} =  useParams();
    const {age} = useParams();      
    const name = id; 
  return (
    <div>user is :{name}{age}</div>
  )
}

export default User