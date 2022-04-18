import Multiselect from 'multiselect-react-dropdown';
import PropTypes from 'prop-types'
import React, { Component, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { InputActionMeta } from 'react-select';
import Select from 'react-select/dist/declarations/src/Select';
import apiService from '../../../service/api.service';
import apis from '../../../service/api.service';
// import  withRouter from "react-router";


function AddForm() {
   let userData :any ; 
   userData = localStorage.getItem('userData')
   let slectedItem:any
   let userImage:any;
    const [list, setlist] = useState<any>({
        username: '',
        caption: '',
        email: '',
        data: [],
        userImage: {}
    })
    const { id } = useParams()
    let data: any;
    let selectedOption: any[] = [];
    let token = localStorage.getItem("token")
    function getByid(id: any) {
        apiService.apis.post('/api/feed/' + id).then(res => {
            console.log("dafsdfa", res.data);
            data = res.data
            // list.username= data.userName
            // list.caption= data.caption 
            // list.email= data.email
            // list.data = data.data   
            setlist({  
            username: data.userName,
            caption:  data.caption,
            email: data.email,
            data: data.data,
            userImage:{}
        });
            // selectedOption = data.data;
            // console.log(list);

            // setlist({ restoLists: res.data.data })
        })
    }
    let userinfo:any;
    useEffect(() => {
        if (id != '' && !id) {
            getByid(id);
        }
    }, []);

  

    function getform(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        setlist({ ...list, [name]: value });
    }

    function filehendal(event: any) {
        // userImage = event.target.files[0];
        const name = event.target.name;
        const value = event.target.files[0];
        setlist({ ...list, [name]: value })
    }

    function onSelect(selectedItem: any, selectedList: any) {
        console.log(selectedItem, selectedList);
        let arr:any = JSON.stringify(selectedItem);
        slectedItem = arr 
    }
    let nav = useNavigate()
    
    function submitval() {
        // userinfo = JSON.parse(localStorage.getItem('userData'));
        let username = JSON.parse(userData).username;
        let _id =  JSON.parse(userData)._id;
        const formData = new FormData();
        formData.append("feedpost", list.userImage);
        formData.set("username", username);
        formData.set("caption", list.caption);
        formData.set("userId",_id);
        debugger
        if (id) {
            apis.apis.put('/api/feed/'+id, formData, {
                headers: {
                    'Authorization': `Basic ${token}`
                }}).then(res => {
                console.log('response', res);
            }).catch(err =>{
                console.log(err);
                
            })
        } else {
            console.log(list);
            apis.apis.post('/api/feed/', formData, {
                headers: {
                    'Authorization': `Basic ${token}`
                }}).then(res => {
                console.log('response', res);
            })

        }
        nav('/')
    }
   



    // let userId = props.match.params.id;
    // if (userId != null && userId !='') {
    //     edit(userId)
    // }

    // const options = [
    //     { value: 'chocolate', name: 'Chocolate' },
    //     { value: 'strawberry', name: 'Strawberry' },
    //     { value: 'vanilla', name: 'Vanilla' },
    // ];
    return (
      
    
        <div className="container">
            {/* <div className="mb-3">
                <label htmlFor="text" className="form-label"></label>
                <input type="text" value={list.username} name="username" id="" onChange={getform} className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">username</small>
            </div> */}
            <div className="mb-3">
                <label htmlFor="text" className="form-label"></label>
                <input type="text" value={list.caption} name="caption" id="" onChange={getform} className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">caption</small>
            </div>
            {/* <div className="mb-3">
                <label htmlFor="text" className="form-label"></label>
                <input type="text" value={list.email} name="email" id="" onChange={getform} className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">email</small>
            </div> */}
            <div className="mb-3">
                <label htmlFor="pass" className="form-label"></label>
                <input type="file" name="userImage" id="" onChange={filehendal} className="form-control" placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">image</small>
            </div>
            {/* <Multiselect

                placeholder={'Choose modes'}
                // options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
                options={[
                    { key: "Option 1", cat: "Group 1" },
                    { key: "Option 2", cat: "Group 1" },
                    { key: "Option 3", cat: "Group 1" },
                    { key: "Option 4", cat: "Group 2" },
                    { key: "Option 5", cat: "Group 2" },
                    { key: "Option 6", cat: "Group 2" },
                    { key: "Option 7", cat: "Group 2" }
                ]}
                onSelect={onSelect} // Function will trigger on select event
                displayValue="key"
                selectedValues={selectedOption}
                disable={false}
                style={{ marginTop: '2rem' }}
            /> */}
            <button className='btn btn-primary m-5' type="submit" onClick={submitval}>
                Submit
            </button>
        </div>

    )

}

export default AddForm
