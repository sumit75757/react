const stat={
    userdata:[]
}
export default function userInfo(state = [],action:any) {
    console.log(action.type)
    let data = {
        data:action.data,
        and:"dfasdfasdf"
    }
    switch (action.type) {
        
        case 'USER_SELECT':
        console.log("asdfasdfasdF",state);

            // console.warn("reducer",action)
            return [
                ...state,
                {cardData:data}
            ]
        default:
            return state
    }
}