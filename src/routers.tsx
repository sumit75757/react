import React from 'react'
import { Route,Router, Routes } from 'react-router'
import AddForm from './component/feed/actions/assFeed'
import Feed from './component/feed/feed'
import Forms from './component/form/form'
import Protectedroute from './component/protectedRoute/protectedroute'
import User from './component/user'

const Routesss: React.FC = () => {
  return (
    <Routes>
          <Route element={<Protectedroute />}>
            <Route path="/" element={<Feed />} />
            <Route path="/feed/" element={<AddForm  />} />
            <Route path="/form/" element={<Forms  />} />
            <Route path="/form/:id"  element={<Forms />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/user/:id/:age" element={<User />} />
            <Route path="/*" element={<h1>Error 404</h1>} />
          </Route>
    </Routes>

  )
}
export default Routesss;

