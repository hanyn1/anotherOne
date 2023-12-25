import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Data1 from '../Database/Data1';
export default function Equipe() {
  return (
    <div>
      <h1>EQUIPE LIST</h1>
    
    {
        Data1.map((equipe)=>(
            <div class="card" style={{width: "18rem;"}}>
  <img src={equipe.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{equipe.name}</h5>
    <p class="card-text">{equipe.equipe}</p>
  </div>
</div>

        )


    )




    }
    </div>
  )
}
