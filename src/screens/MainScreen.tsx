//Crearemos la pantalla principal

import { HeroNotices } from '../components/ui/HeroNotices/HeroNotices';
import { SearchBar } from '../components/ui/SearchBar/searchBar';
import style from './mainScreen.module.css'
export const MainScreen = () => {
    return (
    <div>
        <SearchBar></SearchBar>
        <HeroNotices/>
    </div>
    );

};