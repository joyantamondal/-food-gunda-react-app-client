import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/food';
    // console.log('came from',location.state?.from)
    const handleGoogleLogin= ()=>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email"  placeholder="Your Email"/>
                    <br/>
                    <input type="password" />
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Food Gunda? <Link to="/register">Create Account</Link></p>
                <div>------------or------------</div>
                <br />
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;