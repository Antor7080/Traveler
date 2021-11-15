
/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/login.png'
import googleLogo from '../../../images/google.png'


const Login = () => {

    const { signInWithGoogle, user } = useAuth();

    const histoty = useHistory();
    const location = useLocation();
    const rediract = location.state?.from || "/";



    useEffect(() => {
        user?.email ? histoty.push(rediract) : "";
    }, [user, histoty, rediract]);

    return (
        <div className="container">
            <div className="row px-3">
                <h1 className="text-center fw-bold py-5">PLEASE SIGN IN FROM HERE</h1>
                <div className="col-lg-6 col-md-4 col-12">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-lg-6 col-md-8 col-12 border text-center rounded p-4">
                    <button onClick={signInWithGoogle} className="btn btn-secondary align-items-center d-flex  mt-3">
                        <img className="w-25" src={googleLogo} alt="" />
                        <h2>Sign In With Google</h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;