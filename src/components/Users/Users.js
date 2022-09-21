import React, { useEffect, useState } from 'react';
import Display from '../DisplayUsers/Display';
import "./Users.css"
const Users = () => {
    const [users,setUsers] = useState([])
    useEffect(() =>{
        fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => setUsers(data.results))
    },[])
    return (
        <div className='userDiv'>
            {
              users.map(user => <Display user ={user} key = {user.login.uuid}></Display>)
            } 
        </div>
    );
};


export default Users;