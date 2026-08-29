import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([])

     const {loading, error, getAllComics} = useMarvelService();
        
    useEffect(() => {
        onRequest()
    }, [])

    const onRequest = () => {
        getAllComics().then(setComicsList)
    }

    const comicsLoading = () => {
    const item = comicsList.map(res => {
    return (
    <li className="comics__item" key={res.id}>
        <a href={res.thumbnail}>
            <img src={xMen} alt={res.title} className="comics__item-img"/>
            <div className="comics__item-name">{res.title}</div>
            <div className="comics__item-price">{res.price}</div>
        </a>
    </li>
    )
        })

        return (
            <ul className="comics__grid">
                {item}
            </ul>
        )
    }

    return (
        <div className="comics__list">
            {comicsLoading()}
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;