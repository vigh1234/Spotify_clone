import React from 'react'
import './main.css'
import Home from './Home'
import Library from './Library'
import Header from './Header'
import Player from './Player'

export default function Main() {
  return (
    <div>
      <div className="container">
            
        <div className="home"><Home/></div>
        <div className="library"><Library/></div>
        <div className="main"><Header/></div>
        <div className="player"><Player/></div>
      </div>
 
    </div>
  )
}