import React from 'react'
import './main2.css'
import Home from './Home'
import Library from './Library'
import Player from './Player'
import Category from './Category'


export default function Main2() {
  return (
    <div>
      <div className="container">
            
        <div className="home"><Home/></div>
        <div className="library"><Library/></div>
        <div className="Category"><Category/></div>
        <div className="player"><Player/></div>
        
      </div>
 
    </div>
  )
}