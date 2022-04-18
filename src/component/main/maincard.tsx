/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '../main/main.css'
import { Component, useEffect, useState } from 'react'
import api from '../../service/api.service';
import baseURL from '../../service/api.service';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
function Maincard(){
let  token = localStorage.getItem("token")
const [list, setlist] = useState({
  restoLists: []
})

let navigat = useNavigate();
function getdata(){
  api.apis.get('/api/user/',{headers: {
    'Authorization': `Basic ${token}` 
  }}).then(res => {
    console.log("dafsdfa",res.data.data);
    setlist({ restoLists: res.data.data })
  }).catch(err=>{
    console.log(err.message);
    navigat("/singin")
  })
}
  
useEffect(() => {
  getdata()
}, []);
 
function remove(id:any){
 
  
  
  const con =window.confirm("Delete User ?")
  if (con == true) {
    api.apis.delete('/api/user/'+id,{headers: {
      'Authorization': `Basic ${token}` 
    }}).then(res => {
      console.log("dafsdfa",res.data.data);
      // setlist({ restoLists: res.data.data })
      getdata();
    })
  }
 


 }
  
  let navigate = useNavigate();
  function edit(userid:any){
    navigate('/form/'+userid);
   }
   

    // console.log(this.state.restoLists);
    return (
      <><div className='container' >
        <div>
          {
            list.restoLists ?
              <><h1>RestaurantList</h1> <NavLink className='btn btn-primary m-2' to={'/form'}>
                add user
              </NavLink><div>
                <table className="table table-hover table-responsive bg-light shadow-lg p-3 mb-5 bg-white rounded">
                  <thead >
                    <tr>
                      <th>#</th>
                      <th>Imag</th>
                      <th>Username</th>
                      <th>email</th>
                      <th>Phone</th>
                      <th>userID</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.restoLists.map((Item: any) => {
                      return (
                        <tr key={Item.id}>
                          <td>#</td>
                          <td>  <img className='userImage' src={ baseURL.baseURL+ Item.userImage} alt=""  width="460" height="345" /></td>
                          <td>{Item.username}</td>
                          <td>{Item.email}</td>
                          <td>{Item.phone}</td>
                          <td>{Item._id}</td>
                          <td> <i onClick={(e)=>edit(Item._id)} className="fa fa-pencil-square m-1" aria-hidden="true"></i>  <i onClick={(e)=>remove(Item._id)} className="fa fa-trash" aria-hidden="true"></i></td>
                        </tr>)
                    })}
                  </tbody>
                  
                </table>
              </div></>
              :
              <><div className="spinner-border" role="status">
              </div><span className="sr-only">Loading...</span></>
          }
        </div>
      </div>
      </>
    )
  
}
export default Maincard;



