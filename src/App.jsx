
import Background from './Component/Background/Background';
import Navbar from './Component/Navbar/navbar'
import Hero from './Component/Hero/hero';
import React, { useEffect, useState } from 'react'
const App = () => {

  let heroData = [
    {text1 : "Dive into",text2 : "what you love"},
    {text1 :"Indulge", text2 : "your passion"},
    {text1 :"Give into", text2 : "your passion"},
  ]

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])
  const[heroCount,setHeroCount] = useState(0)
  const[playStatus,setPlayStatus] = useState(false)
  return (
    <div>
     <Background playStatus={playStatus} heroCount={heroCount}/>
     <Navbar/>
    <Hero
    heroData = {heroData[heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus = {playStatus}
    setPlayStatus={setPlayStatus}
    />
    </div>
  )
}

export default App
