import Home from "../component/home";
import {connect,useDispatch} from 'react-redux'

import { setUser } from "../actions/index";
const mapStatTOProps = (state: any) =>({
    
})
const mapDespatchProps = (dispatch:any)=>({
    userInfo:(data: any)=>dispatch(setUser(data))
})

export default connect(mapStatTOProps,mapDespatchProps)(Home);