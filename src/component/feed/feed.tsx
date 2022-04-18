import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Showfeed from './actions/showfeed'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import AddForm from './actions/assFeed';

export class Feed extends Component<any, any> {
  constructor(props: any) {
    super(props);

  }



  render() {
    return (
      <div>
        <NavLink className='btn btn-primary m-2' to={'/feed'}>
          Add Post
        </NavLink>
        <div><Showfeed/></div>

      </div>
    )
  }
}

export default Feed