import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { Redirect } from 'react-router-dom';

// const Error=(props) => {
//     return (
//         <div className="error-card">
//             <h3>{error}</h3>
//         </div>
//     )
// }

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    // const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();

        axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/login`,
            { email, password }
        ).then(response => {
            localStorage.setItem('jwtToken', response.data.token);
            setAuthToken(response.data.token);
            props.handleAuth(response.data.user);
            setRedirect(true);
        }).catch(err => console.log('WE HAVE AN ERROR', err))
    }

    if (redirect) return <Redirect to='/profile' />

    return (
        <section>
           {/* {error ? <Error error={error} /> : null} */}
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-elem">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Lovemtns@provider.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-elem">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit" value="Login" />
            </form>
        </section>
    );
}

export default Login;