import { useState } from 'react';
import style from './searchBar.module.css'
import { getNoticesBySearch } from '../../../crud/crudNoticias';
import { useStoreNews } from '../../../store/useStoreNews';


export const SearchBar = () => {

  const [searchText, setSearchText] = useState('')
  const { fillArray} = useStoreNews()

  const getNoticias = async (search: string ) => {
          const noticias = await getNoticesBySearch(search)
          fillArray(noticias) //esto me va a rellenar el array con las noticias
      }
  

  return (
    
    <div className={style.cardBar}>
      <h1>Noticias Mundiales</h1>
      <div className={style.bar}>

        <input type="text" onChange={(e)=>{
          setSearchText(e.target.value)
          
        }} />
        <button onClick={()=>{
          getNoticias(searchText)
          
          console.log(searchText) 
          
        }
      }>
          🔍
        </button>
      </div>
    </div>
  );
};