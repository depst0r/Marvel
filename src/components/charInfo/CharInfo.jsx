import './charInfo.scss';

import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMesasage/ErrorMesasage';
import Sceleton from '../skeleton/Skeleton';
import useMarvelService from '../../services/MarvelService';

import PropTypes from 'prop-types';

const CharInfo = props => {

    const [char, setChar] = useState(null)

     const {loading, error, getCharacter} = useMarvelService();

    useEffect(() => {
        updateChar()
    }, [props.charId])


   const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return
        }


        getCharacter(charId)
            .then(onCharLoaded)
    }  
    
    const onCharLoaded = char => {
        setChar(char)
    }


    
        const sceleton = char || loading || error ? null : <Sceleton/>

            const errorMesasage = error ? <ErrorMessage/> : null;
            const spinner = loading ? <Spinner/> : null;
            const content = !(loading || error || !char) ? <View char={char}/> : null;

        return (
        <div className="char__info">
            {sceleton}
            {errorMesasage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is  no comics with this carascter'}
                {
                    comics.map((item, i) => {
                        // eslint-disable-next-line
                        if (i > 9) return;
                        return (
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                        )
                    })
                }

                
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;