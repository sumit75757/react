import { Navigate, Outlet } from 'react-router'

function auth(){
    let userData=localStorage.getItem('userData');
    let token=localStorage.getItem('token');
    // api.apis.get('/authchak').then(res=>{
    //     console.log(res);
        
    // }).catch(err=>{
    //     // console.log(err);
        
    // })
    if (userData && token) {
        const user = {login:true}
        return user && user.login;
    }
    else{

        const user = {login:false}
        return user && user.login;
    }
}

function Protectedroute() {
    const isAuth = auth(); 
  return (
   isAuth ? <Outlet/> : <Navigate to="/singin"/>
  )
}

export default Protectedroute