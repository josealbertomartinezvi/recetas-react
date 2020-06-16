import API from './config';
import axios from 'axios'; // paquete para comunicar con una API

const RECETAS_ENDPOINTS = {
  LISTA: "recetas/lista", //URI para obtener todas las recetas
  NUEVA: "recetas/nueva" //URI para llamar a una pelicula en especifico.
}

const RecetaService = {
   getRecetas: async () => {
    return await axios.get(`${ API.baseURL }${ RECETAS_ENDPOINTS.LISTA }`)
  },
  saveReceta: async (data) => {
    return await axios.post(`${ API.baseURL }${ RECETAS_ENDPOINTS.NUEVA }`, { data });
  },

}

export default RecetaService;