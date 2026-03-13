import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

        componentDidMount() {
            this.marvelService.getAllCharacters()
                .then(this.onCharListLoaded)    
        }

        onCharListLoaded = charList => {
            console.log('onCharLoistLoaded',this.state.charList)
            this.setState({
                charList,
            })
            
        }


    render() {
        const {charList, loading, error} = this.state;

        return (
        <div className="char__list">
            <ul className="char__grid">
                {charList.map(res => {
                    return (
                    <li className="char__item">
                    <img src={res.thumbnail} alt={res.thumbnail} key={res.id}/>
                    <div className="char__name">{res.name}</div>
                </li>
                    )
                })}

            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
    }
}

export default CharList;