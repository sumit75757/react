import React, { useEffect, useState } from 'react'
import baseURL from '../../../service/api.service';
import api from '../../../service/api.service';
import "./action.css";
function Showfeed() {
    let token = localStorage.getItem("token")

    const [list, setlist] = useState({
        restoLists: []
    })

    const [Count, setcount]: any = useState({
        count: [...list.restoLists]
    })




    useEffect(() => {
        setTimeout(() => {
            getdata()

        }, 1000);
        console.log("dafsdfa", list.restoLists);

    }, []);


    function getdata() {
        api.apis.get('/api/feed/').then(res => {
            setlist({ restoLists: res.data.data })

        }).catch(err => {
            console.log(err.message);
        })
    }
    


    function like(item: any, index: any) {
            const divsa: any = [...list.restoLists];
        // this.setState({ divs });
        // console.log("fasdfasdfasdfa", divsa[index]);
        console.log(divsa[index].data.likeUser);
        // divsa[index].like++;

        // setcount({ count: divsa })

        let userData: any = localStorage.getItem('userData')
        let id = JSON.parse(userData)._id
        let like: any[] = item.data.likeUser
        let findindex: any = like.length
        let find: any = like.filter(d => id == d)
        if (findindex == 0) {
            api.apis.put('/api/feed/like/' + id + '/' + item.data._id + '/like').then(res => {
                if (res) {
                    divsa[index].like++;
                    setcount({ count: divsa })
                    getdata()
                }
            }).catch(err => {
                console.log(err.message);
            })
        }
        else if (find.length) {
            api.apis.put('/api/feed/like/' + id + '/' + item.data._id + '/dilike').then(res => {
                console.log("dafsdfa", res.data.data);
                if (res) {
                    divsa[index].like -= item.like;
                    setcount({ count: divsa })
                    getdata()
                }
            }).catch(err => {
                console.log(err.message);
            })

        }
        else {
            api.apis.put('/api/feed/like/' + id + '/' + item.data._id + '/like').then(res => {
                if (res) {
                    divsa[index].like++;
                    setcount({ count: divsa })
                    getdata()
                }
                console.log("dafsdfa", res.data.data);

            }).catch(err => {
                console.log(err.message);
            })
        }





        // let find: any = like.forEach(element => {
        //     console.log(element);

        //     if(element == id)
        //     {
        //         
        //     }
        //     else{
        //         if (item.data._id) {
        //             api.apis.put('/api/feed/like/' + id + '/' + item.data._id + '/like').then(res => {
        //                 if (res) {
        //                     divsa[index].like ++;
        //                     setcount({  count:divsa })
        //                 }
        //                 console.log("dafsdfa", res.data.data);

        //             }).catch(err => {
        //                 console.log(err.message);
        //             })
        //         }
        //     }
        // });
        // console.log(find);



    }
    let comments :any;
    function comment(event:any,item:any){
        let val = event.target.value
        comments = val
        console.log(comments);
        

    }


    function send(item:any) {
        console.log(comments);
        
        debugger
        let userData: any = localStorage.getItem('userData')

        let id = JSON.parse(userData)._id
        let username = JSON.parse(userData).username

        let data = {
            userId:id,
            username:username,
            comment:comments
        }
        if(comments != '' && comments){

            api.apis.put('/api/feed/comment/' + item.data._id + '/comments',data).then(res => {
                
                getdata()
                console.log("dafsdfa", res.data.data);
                
            }).catch(err => {
                console.log(err.message);
            })
        }
    }
    // const count:any ='dfasd';
    

    return (
        <div >
            {/* <div className="md-sm-3">
                <div className="card w-100 ">
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' className="card-img-top" alt="Fissure in Sandstone" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" className="btn btn-primary">Button</a>
                </div>
                </div>
            </div> */}

            <div className="container  ">
                <div className="row align-self-start mt-5 ">
                    {list.restoLists.map((item: any, index) => {
                        console.log(item.like);
                        return (
                            <div className="col-md-12">
                                <div className="card "  >
                                    <h5 className="card-title">{item.data.username}</h5>
                                    <img src={baseURL.baseURL + item.data.feedpost} className="card-img-top" alt="Fissure in Sandstone" />
                                    <div className="card-body">
                                        <p className="card-text">{item.data.caption}</p>
                                        
                                        <i className="fa fa-heart"  onClick={() => like(item, index)} > {item.like}</i>  

                                        {/* <button  className="btn btn-primary" onChange={(asdfasd)} >likefas  {count}</button> */}

                                    </div>
                                <input type="text" placeholder='comment' onChange={(e)=>comment(e,item)}/>
                                <button  className="btn btn-primary" onClick={(e)=>send(item)} > send </button>
                                </div>
                            </div>
                        )
                    })
                    }

                    {/* <div className="col-md-12">
                        <div className="card "  >
                        <h5 className="card-title">Card title</h5>
                            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' className="card-img-top" alt="Fissure in Sandstone" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#!" className="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="md-sm-3">

            </div>

            {list.restoLists.map((item: any) => {
                <div className="card">
                    <img src={item.data.feedpost} className="card-img-top" alt="Fissure in Sandstone" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                </div>

            })}
        </div>
    )
}

export default Showfeed