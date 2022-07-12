import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCharacterThunk, filterCharacterThunk } from "../../store/actions/characters.actions";

import './style.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const [texto, setTexto] = useState('');
    const input = useRef(null);


    const handleClick = (e: any) => {
        if (!texto) {
            fetchCharacterThunk()(dispatch);
        } else {
            filterCharacterThunk(texto)(dispatch);
        }
    }

    const handleClear = () => {
        setTexto('');
        fetchCharacterThunk()(dispatch);
    }

    const handleOnChange = (e: any) => {
        setTexto(e.target.value);
    }

    return (
        <div className="filtros">
            <label htmlFor="nome">Filtrar por nome:</label>
            <input
                ref={input}
                type="text"
                placeholder="Rick, Morty, Beth, Alien, ...etc"
                name="nome"
                onChange={handleOnChange}
                value={texto}
            />
            <div className='buttons-filter'>
                <button 
                    onClick={handleClick}
                    className="search-button"
                >
                    Pesquisar
                </button>
                <button
                    className="clear-button"
                    onClick={handleClear}
                >
                    Limpar
                </button>
            </div>
        </div>
    );
}
