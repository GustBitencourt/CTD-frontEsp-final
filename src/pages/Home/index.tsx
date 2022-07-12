import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCharacterThunk } from '../../store/actions/characters.actions';

import { CharacterGrid } from '../../components/CharacterGrid';
import { Filter } from '../../components/Filter';
import { Paginacao } from '../../components/Paginacao';

import './style.css';

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <Home /> ```
 *
 * @returns Página inicio
 */
export const Home = () => {
    const dispatch = useDispatch();
    const { personagens, isFetching, errorMessage } = useSelector((state: any) => state.person);

    useEffect(() => {
        fetchCharacterThunk()(dispatch);

    }, [dispatch]);

    return (
        <div className="container">
            <div>
                <h3 className='home_title'>Lista de Personagens de Rick And Morty</h3>
            </div>
            
            <Filter />
            <Paginacao />
            {isFetching && <span>Carregando...</span>}
            {errorMessage && <span>Ocorreu um erro: {errorMessage}</span>}
            <CharacterGrid characters={personagens} />
            <Paginacao />
        </div>
    );
};
