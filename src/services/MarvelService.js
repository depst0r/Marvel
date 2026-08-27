import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
    const { loading, request, error, clearError } = useHttp();
    
    const _apiBase = 'http://localhost:3001/';
    const _baseOffset = 1;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(
            `${_apiBase}characters`
        );
        return res.map(_transformCharacter);
    };

    const getCharacter = async (id) => {
        const res = await request(
            `${_apiBase}characters/${id}`
        );
        return _transformCharacter(res);
    };

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request (
            `${_apiBase}comics`
        )
        return res.map(_transformComics) 
    }

    
    const getComics = async id => {
        const res = await request(
            `${_apiBase}comics/${id}`
        );
        return _transformComics(res);
    };

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description || 'There is no description for this character',
            thumbnail: char.thumbnail,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics?.items || [],
        };
    };

    const _transformComics = comics => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description,
            pageCount: comics.pageCount,
            thumbnail: comics.thumbnail,
            lang: comics.language,
            price:  comics.price,
        }
    }

    return {
        loading,
        error,
        clearError,
        getAllCharacters,
        getCharacter,
        getAllComics,
        getComics,
    };
};

export default useMarvelService;