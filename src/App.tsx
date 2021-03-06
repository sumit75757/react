import axios from 'axios';
import React from 'react';
import { Feedback } from 'react-bootstrap/lib/FormControl';
import { BrowserRouter, Routes, Route, Link ,Router,IndexRouteProps,HistoryRouterProps } from 'react-router-dom';
import './App.css';
import Login from './component/auth/login/login';
import Register from './component/auth/ragister/register';
import Chat from './component/chat/chat';
import AddForm from './component/feed/actions/assFeed';
import Showfeed from './component/feed/actions/showfeed';
import Feed from './component/feed/feed';
import Forms from './component/form/form';
import Maincard from './component/main/maincard';
import Navbarr from './component/navbar/nav';
import Protectedroute from './component/protectedRoute/protectedroute';
import User_detile from './component/redux/container/user_detile';
import User from './component/user';
import Routesss  from './routers';

let auth: false;

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <Routes>
          {/* <Route path="/" element={< Routesss/>} /> */}
          <Route element={<Protectedroute />}>
            <Route path="/" element={<Feed />} />
            <Route path="/feed/" element={<AddForm  />} />
            <Route path="/chat/" element={<Chat  />} />
            <Route path="/form/" element={<Forms  />} />
            <Route path="/form/:id"  element={<Forms />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/user/:id/:age" element={<User />} />
            <Route path="/redux" element={<User_detile />} />
            <Route path="/*" element={<h1>Error 404</h1>} />
          </Route>
          {/* <Route element={<Protectedroute />}> */}
            <Route path="/singup" element={<Register />} />
            <Route path="/singin" element={<Login/>} />
            {/* </Route> */}
        </Routes>
      </BrowserRouter>
      
    

    </>


  )


}

export default App;
