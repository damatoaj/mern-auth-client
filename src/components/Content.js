import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

const PrivateRoute = ({ component: Component , ...rest }) => {
    const token = localStorage.getItem('jwttoken');
    return <Route {...rest} render={(renderProps) => (
        token ?
        <Component {...rest} {...renderProps} /> :
        <Redirect to='/auth' />
    )} />
}



const Content = (props) => {
    return (
        <main>
            <Route exact path='/' component={Home} />
            <Route path='/auth' render={(renderProps) => (
                <Auth handleAuth={props.handleAuth} {...renderProps} />
            )} />
            <PrivateRoute 
                path='/profile' 
                component={Profile} 
                currentUser={props.currentUser} 
                handleAuth={props.handleAuth} 
            />
        </main>
    );
}

export default Content;