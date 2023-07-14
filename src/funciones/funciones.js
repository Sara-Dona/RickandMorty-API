import axios from 'axios';

export const todosPersonajes = async(state) => {
    const peticion = await axios.get("https://rickandmortyapi.com/api/character");
    state(peticion.data.results);
}

export const detailsPersonaje = async (id, state)=> {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    state(peticion.data)

}