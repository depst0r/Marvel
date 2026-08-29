import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoyndary from '../errorBoundary/ErroBoyndary';
import decoration from '../../resources/img/vision.png';

const MainPage = () => {
    const [selectedChar, setChar] = useState(null)

    const onCharSelected = id => setChar(id)
    return (
       <>
        <ErrorBoyndary>
            <RandomChar/>
        </ErrorBoyndary>
        <div className="char__content">
            <ErrorBoyndary>
                <CharList onCharSelected = {onCharSelected}/>
            </ErrorBoyndary>
            <ErrorBoyndary>
                <CharInfo charId = {selectedChar}/>
            </ErrorBoyndary>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
    </> 
    )
}

export default MainPage