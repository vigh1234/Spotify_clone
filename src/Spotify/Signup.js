import { useState } from "react";
import React from "react";
import './Signup.css';
import { Link } from "react-router-dom";

export default function Signup(){

    const [Input,setInput]=useState('')
    const [error,setError]=useState('')

    const onChange=(event)=>{
        setInput(event.target.value)
        console.log(Input)
    }
    const buttonClick=()=>{
        if(Input===''){
            setError('Please enter a valid Email')
        }
        else{
            setError()
        }
    }
    return(
        <>
        <body id="body1">
        <div>
        <div className="maincontainer">
        <i class="fa-brands fa-spotify spotify2"></i><span id="spotify2">Spotify</span>
        </div>
        <div className="signupcontainer">
            <p id="head">Sign up to start</p>
            <p id="head1">Listening</p>

            <div>
            <label className="lbl">Email address</label>
            <div> 
                <input className="userinput1" onChange={onChange}  value ={Input} type="email" placeholder="name@domain.com"/>
            </div>
            <div id="error">{error}</div>
            <div>
                <p className="phone">Use phone number instead.</p>
            </div>
            <div>
                <button onClick={buttonClick}className="buttn1" type="button">Next</button>
            </div>
            <div className="orcontainer">
            <div className="or"></div>
            <div className="option">or</div>
            <div className="or2"></div>

            </div>
            <div className="chrome">
                <i class="fa-brands google2 fa-google"></i>
                <p id="ContinuewithGoogle">Continue with Google</p>
            </div>
            <div className="facebook2">
                <i class="fa-brands fb1 fa-facebook-f"></i>
                <p id="ContinuewithFacebook">Continue with Facebook</p>
            </div>
            </div>

            <div className="section"></div>
            <div className="signin">
            <p className="Loginhere">Already Have an account?</p>
            <Link to ="/login"><p className="Login">Log in here </p></Link>
            </div>
            
            <p id="recaptcha">This site is protected by reCAPTCHA and the Google</p>
            <p id="recaptcha1"><s>Privacy Policy</s> and <s>Terms of Service</s> apply.</p>
            
        </div>

        </div>
        </body>
       
        </>
    )
}