import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Showfeed from './actions/showfeed'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import AddForm from './actions/assFeed';

export class Feed extends Component<any, any> {
  counts:number = 0
  constructor(props: any) {
    super(props);

  }


count(){
  console.log(this.counts);
  this.counts ++
  
}

  render() {
    
    return (
      <div>
        <NavLink className='btn btn-primary m-2' to={'/feed'}>
          Add feed
        </NavLink>
        {/* <button className=' btn btn-primary' onClick={this.count} >{this.counts}</button> */}
        <div><Showfeed/></div>

      </div>
    )
  }
}

export default Feed