import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoyndary from '../errorBoundary/ErroBoyndary';

import decoration from '../../resources/img/vision.png';
import { Component } from "react";

class App extends Component {
    state = {
        selectedChar: null,
    }

onCharSelected = id => {
    this.setState({
        selectedChar: id
    })
}

    render() {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoyndary>
                    <RandomChar/>
                </ErrorBoyndary>
                <div className="char__content">
                    <ErrorBoyndary>
                        <CharList onCharSelected = {this.onCharSelected}/>
                    </ErrorBoyndary>
                    <ErrorBoyndary>
                        <CharInfo charId = {this.state.selectedChar}/>
                    </ErrorBoyndary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
    }
}

export default App;