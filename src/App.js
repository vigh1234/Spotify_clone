import React from "react"

import Main2 from './Spotify/main2'
import { Route, Routes} from 'react-router'
import Main from './Spotify/main'
import Login from "./Spotify/Login"
import Signup from "./Spotify/Signup"
import Main3 from "./Spotify/Main3"
import Main4 from "./Spotify/Main4"


export default function App(){
  return(
    <>
    <Routes>
        <Route path="/" element = {<Main/>}/>
        <Route path="/search" element = {<Main2/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/song" element={<Main3/>}/> 
        <Route path="/songplay" element={<Main4/>}/> 
    </Routes>
    
    
    
    </>
  )
}