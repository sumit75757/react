import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import apis from '../../../service/api.service';

function Register()  {
    //   password: '',
    // }
    const [login, setlogin] = useState({
      username:'',
      email: '',
      password: '',
    })
    // getform = getform.bind(this);
    // this.submitval = this.submitval.bind(this);
 

  function getform(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    setlogin({...login,[name]:value});
    console.log(login);

  }
  
  const navigate = useNavigate();
  function Submitval() {
    console.log(login);
    apis.apis.post('/auth/singup/', login ).then((res:any) => {
      console.log('response', res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userData', JSON.stringify(res.data.useData));
    navigate('/');

      if (res.data.response.user) {

      }
    })
    //debugger

  }
    return (
      <>
        <div className=" bg-light con shadow-lg p-3 mb-5  rounded mx-auto mt-5">
          <div className="form-group mt-4" >
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <i className=" input-group-text fa fa-user-circle"></i>
              </div>
              <input type="text" name="username" id="" onChange={getform} className="form-control" placeholder="Enter Name Here" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <i className=" input-group-text fa fa-envelope"></i>
              </div>
              <input type="email" name="email" id="" onChange={getform} className="form-control" placeholder="Enter email" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <i className=" input-group-text fa fa-key"></i>
              </div>
              <input type="password" name="password" id="" onChange={getform} className="form-control" placeholder="Enter password" />
            </div>
          </div>
          <div className="mt-5">
            <button className="btn btn-primary " onClick={Submitval}>   Submit  </button>
            <NavLink className='btn btn-link m-2' to={'/singin'}>
              singin
              </NavLink>
          </div>
        </div>
      </>
    )
}

export default Register