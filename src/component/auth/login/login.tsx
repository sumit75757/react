import React, { Component } from 'react'
import { useState } from 'react';

import apis from '../../../service/api.service';
import "./login.css"
import { NavLink, useNavigate } from 'react-router-dom';


function Login() {
 
    // const state = {
    //   username:"sumit",
    //   email: '',
    //   password: '',
    // }
    const [login, setlogin] = useState({
      email: '',
      password: '',
    })
    // this.getform = this.getform.bind(this);
    // this.submitval = this.submitval.bind(this);
 

  function getform(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    setlogin({...login,[name]:value});
    console.log(login);

  }
  
  const navigate = useNavigate();
  function Submitval() {
    //debugger
    console.log(login);
    apis.apis.post('/auth/singin/', login ).then((res:any) => {
      console.log('response', res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userData', JSON.stringify(res.data.useData));
      if (res.data.response.user) {
        navigate('/');
      }
    })

  }
  
    return (
      <div className="con shadow p-3 mb-5 bg-white rounded mx-auto align-middle mt-5 "  >
           <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <i className=" input-group-text fa fa-envelope"></i>
              </div>
            <input type="email" name="email" id="" onChange={getform} className="form-control" placeholder="Enter email" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <i className=" input-group-text fa fa-key"></i>
              </div>
            <input type="password" name="password" id="" onChange={getform} className="form-control" placeholder="Enter password" />
            </div>
          </div>

         <div className="form-group mt-5">
          <button className="btn btn-primary" onClick={Submitval}>Submit</button>
          <NavLink className='btn btn-link m-2' to={'/singup'}>
              singup
              </NavLink>
          </div>
        </div>
    )
  
}

export default Login

