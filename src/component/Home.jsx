import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navig=useNavigate()
  return (
    <div>
      <h1>WELCOME TO FOOTBALL WORLD</h1>
      <button onClick={()=>{navig('/Player')}}>GO TO PLAYER </button>
      <button onClick={()=>{navig('/Equipe')}}>GO TO equipe </button>
    </div>
  )
}
