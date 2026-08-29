import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoyndary from '../errorBoundary/ErroBoyndary';
import ComicsList from "../comicsList/ComicsList";

import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>  {
    const [selectedChar, setChar] = useState(null)

    const onCharSelected = id => setChar(id)

    return (
        <Router>
        <div className="app">
            <AppHeader/>
            <main>
            <Switch>
                <Route exact path="/">
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
                    </Route>
                    <Route exact path="/comics">
                        <ErrorBoyndary>
                        <ComicsList/>
                        </ErrorBoyndary>
                    </Route>
            </Switch>
            </main>
        </div>
        </Router>
    )
    }


export default App;