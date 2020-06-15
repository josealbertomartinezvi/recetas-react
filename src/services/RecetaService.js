import API from './config';
import axios from 'axios';

const RECETAS_ENDPOINTS = {
  LISTA: "recetas/lista", //URI para obtener todas las recetas
  NUEVA: "recetas/nueva" //URI para llamar a una pelicula en especifico.
}

const RecetaService = {
   getRecetas: async () => {
    await axios.get(`${ API.baseURL }${ RECETAS_ENDPOINTS.LISTA }`)
    .then(res => {
      const personas = res.data;
      console.log(personas)
    })
  },
  saveReceta: async (data) => {
    return await axios.post(`${ API.baseURL }${ RECETAS_ENDPOINTS.NUEVA }`, { data });
  },

}

export default RecetaService;