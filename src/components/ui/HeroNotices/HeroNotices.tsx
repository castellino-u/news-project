import { useStoreNews } from '../../../store/useStoreNews';
import style from './HeroNotices.module.css'



export const HeroNotices = () => {
    //traemos la store con el array de noticias
    const {arrayNotices} = useStoreNews()


    return (

    <div className={style.mainNotice}>
        {arrayNotices.length > 0 
        ?
            // mapeamos
            arrayNotices.map((notices)=>(
            <div className={style.cardNotice}>
                <img src={notices.image_url} alt="" className={style.noticesImg} />
                <div className={style.cardText}>
                <p>{notices.title}</p>
                <a href={notices.link} target='_blank'>{notices.link}</a>
                <p>{notices.pubDate}</p>
                </div>
            </div>))
        :
        // sino mapeamos, mostramos esto
            <h1>Realiza una busqueda</h1>
        }
    </div>
    );
};