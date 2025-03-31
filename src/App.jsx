import React from 'react'
import Images from './components/Images'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div style={{textAlign:"center" , justifyContent:"center"}}>
      <div>
      <h1  style={{color:"Blue"}}><b>Created by Suyesh Patil</b></h1>
      </div>
      
    <Navbar />
      
      <Images />
    </div>
  )
}

export default App
