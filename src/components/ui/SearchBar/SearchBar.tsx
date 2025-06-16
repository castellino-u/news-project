import { useState } from 'react';
import style from './searchBar.module.css'
import { getNoticesBySearch } from '../../../crud/crudNoticias';
export const SearchBar = () => {

  const [searchText, setSearchText] = useState('')

  const getNoticias = async (search: string ) => {
          const noticias = await getNoticesBySearch(search)
          console.log(noticias)
      }
  

  return (
    <div>
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
  );
};