import React from 'react'
import { useNavigate  } from "react-router";
function Routess(nav:any) {
   let route = useNavigate()
    function rout(){
        route(nav)
  }
  rout()
}

export default Routess


