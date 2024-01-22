import React from "react";
import { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export default function Login(){

    const navigate = useNavigate();
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    const onChange=(event)=>{
        setEmail(event.target.value)
        console.log(event);
    }
    const onChange1=(event)=>{
        setPassword(event.target.value)

        if(email!=='' && password!==''){
            setError('')
        }
    }

    const buttonClick=()=>{

        if(email==='' || password==='')
        {
            setError('Incorrect username or password')
        }
        else{
            navigate('/');
        }    

    }

    return(
        <>
        <div className="container25">
        <i class="fa-brands fa-spotify spotify1"></i><span id="spotify1">Spotify</span>
        </div>
        <div className="container26">
            <p id="a1">Log in to Spotify</p>
            <div className="google">
                <i class="fa-brands google1 fa-google"></i>
                <p id="a2">Continue with Google</p>
            </div>
            <div className="facebook1">
                <i class="fa-brands fb fa-facebook-f"></i>
                <p id="a2">Continue with Facebook</p>
            </div>
            <div className="apple">
                <i class="fa-brands fa-apple"></i>
                <p id="a2">Continue with Apple</p>
            </div>
            <div className="mobile">
            <p id="a3">Continue with Phone number</p>
            </div>
            <div className="underline1"></div>
        <div className="container27">
            <div>
            <label>Email or Username</label>
            <div> 
                
                <input onChange={onChange} value={email} id="userinput" type="text" placeholder="Email or Username"/>
            </div>
           
            </div>
            <div>
            <label>Password</label>
            <div>
                <input onChange={onChange1} id="userinput" type="password" placeholder="Password"/>
            </div>
            </div>
            <div id="error1">{error}</div>
            <div>
                <button onClick={buttonClick} className="buttn" type="button">Log in</button>
            </div>
            <div>
                <p id="a4">Forgot Your Password?</p>
            </div>
            <div className="underline"></div>
            <div className="container28">
                <p id="a5">Don't have an account?</p> <Link to="/signup"><p id="a6">Sign up for Spotify</p></Link>
            </div>
            
        </div>
        </div>
        

    
        <div><p id="a7">This site is protected by reCAPTCHA and the Google Privacy Policy and <c id="a8">Terms of Service</c>Terms of Service apply.</p></div>
       
       
        </>
    )
}