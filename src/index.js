import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"

 import reportWebVitals from './reportWebVitals';


  // import Login from './Spotify/Login';
// import Main from './Spotify/main'
// import Main2 from './Spotify/main2';s
 import App from './App';
// import Signup from './Spotify/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}
   {/* <Main/> */}
   {/* <Main2/> */}
   {/* <Signup/> */}
   <BrowserRouter>
   <App/>
 
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
