 export function setUser(user:any){
    console.log("action user " ,user);
    return{
        type:"USER_SELECT",
        data :user
    }
    
 };