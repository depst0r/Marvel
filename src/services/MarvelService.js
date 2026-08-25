import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
    const { loading, request, error, clearError } = useHttp();
    
    const _apiBase = 'http://localhost:3001/';
    const _baseOffset = 1;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(
            `${_apiBase}characters?_limit=9&_page=${offset}`
        );
        return res.map(_transformCharacter);
    };

    const getCharacter = async (id) => {
        const res = await request(
            `${_apiBase}characters/${id}`
        );
        return _transformCharacter(res);
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

    return {
        loading,
        error,
        clearError,
        getAllCharacters,
        getCharacter,
    };
};

export default useMarvelService;