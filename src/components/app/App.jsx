import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoyndary from '../errorBoundary/ErroBoyndary';

import decoration from '../../resources/img/vision.png';
import { useState } from "react";

const App = () =>  {
    const [selectedChar, setChar] = useState(null)

    const onCharSelected = id => setChar(id)

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoyndary>
                    <RandomChar/>
                </ErrorBoyndary>
                {/* <div className="char__content">
                    <ErrorBoyndary>
                        <CharList onCharSelected = {onCharSelected}/>
                    </ErrorBoyndary>
                    <ErrorBoyndary>
                        <CharInfo charId = {selectedChar}/>
                    </ErrorBoyndary>
                </div> */}
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
    }


export default App;