//acá crearemos el Store de searchBar

import { create } from 'zustand'
import { IArticle } from '../types/IArticle'

// type Store = {
//   count: number
//   inc: () => void
// }

// const useStore = create<Store>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }

interface useStoreNews {
    
    arrayNotices : IArticle[],
    //vamos a hacer una funcion, que seria como props, un fc
    fillArray: (array: IArticle[])=>void

}
//sintaxis propia de zustand para crear una store 
export const useStoreNews = create<useStoreNews>((set)=>({
    arrayNotices: [],
    fillArray : (array) => set(() => ({arrayNotices: array}))  //esta función es para rellenar el array con las 10 noticias que nos trae la request


}))

