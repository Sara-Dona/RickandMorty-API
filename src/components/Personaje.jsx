import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { detailsPersonaje } from '../funciones/funciones';

const Personaje = () => {
  const { id } = useParams();
  const[personajesDetail, setPersonajesDetail] = useState(null)
    
  useEffect(()=>{
    detailsPersonaje(id, setPersonajesDetail)
  },[]);
   

  return (

    <div>{personajesDetail == null ? (
      <h2>loading...</h2>
    ) : (
      <div key={personajesDetail.id}>
         <h1>{personajesDetail.name}</h1>
         <img src={personajesDetail.image} alt="image" />
         <h1>{personajesDetail.status}</h1>
         <h1>{personajesDetail.species}</h1>
         <h1>{personajesDetail.gender}</h1>
      </div>
     
    )
    } </div>
  )
}

export default Personaje