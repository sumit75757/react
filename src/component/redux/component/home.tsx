import React from 'react'

function Home(props:any) {
    console.log("asdfasdfasdfasSDF",props);
    function send(){
    props.userInfo({pice:100054343,name:'i phone 11'})
   }
  return (
    <div> <img src='chrome://new-tab-page/icons/google_logo.svg' />
    <button className="btn-primary" onClick={send}>submit</button>
    </div>

  )
}

export default Home