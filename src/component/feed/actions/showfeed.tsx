import React, { useEffect, useState } from 'react'
import baseURL from '../../../service/api.service';
import api from '../../../service/api.service';
import "./action.css";
function Showfeed() {
    let token = localStorage.getItem("token")
    const [list, setlist] = useState({
        restoLists: []
    })
    useEffect(() => {
        setTimeout(() => {
            getdata()
        }, 600);
    }, []);
    function getdata() {
        api.apis.get('/api/feed/').then(res => {
            console.log("dafsdfa", res.data.data);
            setlist({ restoLists: res.data.data })
        }).catch(err => {
            console.log(err.message);
        })
    }
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
                    {list.restoLists.map((item: any) => {
                        return (
                            <div className="col-md-12">
                                <div className="card "  >
                                    <h5 className="card-title">{item.username}</h5>
                                    <img src={baseURL.baseURL + item.feedpost} className="card-img-top" alt="Fissure in Sandstone" />
                                    <div className="card-body">
                                        <p className="card-text">{item.caption}</p>
                                        <a href="#!" className="btn btn-primary">Button</a>
                                    </div>
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
                    <img src={item.feedpost} className="card-img-top" alt="Fissure in Sandstone" />
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