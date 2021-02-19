import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = (props) => {
    const [message, setMessage] = useState('Loading msg...');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/private`)
        .then(response => {
            setMessage(response.data.message);
        })
        .catch(err => {
            console.log('😡 OH NO THERE IS AN ERROR', err)
            props.handleAuth(null);
        })
    }, []);

    return (
        <div>
            <h1>Profile page</h1>
            <h4>{message}</h4>
        </div>
    );
}

export default Profile;