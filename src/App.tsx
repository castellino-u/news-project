import { getNoticesBySearch } from "./crud/crudNoticias"
import { MainScreen } from "./screens/mainScreen"
import './App.css'

function App() {
    const getNoticias = async () => {
        const noticias = await getNoticesBySearch('Mauricio Macri')
        console.log(noticias)
    }
    getNoticias()


    return (

      <div>
        <MainScreen/>
    </div>
  )
}

export default App
