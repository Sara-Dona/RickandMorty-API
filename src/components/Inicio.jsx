import { useEffect, useState } from 'react'
import React from 'react'
import { todosPersonajes } from '../funciones/funciones'
import { Link } from 'react-router-dom'

const Inicio = () => {
    const [ personajes , setPersonajes] = useState(null)
    useEffect(() => {
        todosPersonajes(setPersonajes);
    },[])
    
  return (
    <section className=" bg-green-700 ">
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {personajes !== null ? (
        personajes.map(personaje => (
            <div key={personaje.id}>
                <Link to={`personajes/${personaje.id}`} className='flex items-center justify-start  text-white'>{personaje.name}</Link>
                <p className='text-center text-white'>{personaje.status}</p>
                <img className='rounded-xl'src={personaje.image} alt="image" />
            </div>
        ))
    ) : ('no hay personajes')}
    </div>
    </div>
    </section>

  )
}

export default Inicio