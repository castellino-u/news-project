//Servicios 

//instalamos las librerias que vamos a usar
import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY  //Traemos algo del .env así, de esta manera.

//https://newsdata.io/api/1/latest?apikey=pub_b05f3dfe844240bb86455fb03c85c206&q=tito%20calderon

export const getNoticesBySearch = async (search: string)=>{
    const url = `https://newsdata.io/api/1/latest?apikey=pub_75d12fcd937747a2901acf3ce19ab7d9`
    
    const response = await axios.get(`${url}&q=${search}`)

    return response.data

}