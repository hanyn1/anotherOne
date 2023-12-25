import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import data from '../Database/data';
export default function Player() {
  return (
    
    <div>
      <h1>PLAYER LIST</h1>
      {
        data.map((player)=>(
            <div class="card" style={{width: "18rem"}}>
  <img src={player.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{player.name}</h5>
    <p class="card-text">{player.age}</p>
    <p class="card-text">{player.country}</p>
    
  </div>
</div>
        ))
      }
    </div>
  )
}
