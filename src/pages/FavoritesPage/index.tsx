import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Character, GlobalState } from '../../types'
import { fetchCharacterThunk } from '../../store/actions/characters.actions';

import { CharacterGrid } from "../../components/CharacterGrid";
import Swal from 'sweetalert2';

import './style.css';

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <FavoritesPage /> ```
 *
 * @returns Página de favoritos
 */

export const FavoritesPage = () => {
    const [favPersonagens, setFavPersonagens] = useState<Character[]>();
    const personagens = useSelector((state: GlobalState) => state.person.personagens);

    const dispatch = useDispatch();

    useEffect(() => {
        let personagensFiltrados = personagens.filter((character: Character) => character.favorito ?? character);
        setFavPersonagens(personagensFiltrados);
    }, [personagens]);


    const handleRemoveAllFavorites = (): any => {

        Swal.fire({
            title: 'Você tem Certeza?',
            text: "Você não será capaz de reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, remover todos!'
        }).then((result: any) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Removidos!',
                    'Todos favoritos foram removidos!',
                    'success'
                )
                fetchCharacterThunk()(dispatch);
            }
        })
    }

    return (
        <div className="container">
            <div className="actions">
                <h3>Personagens Favoritos</h3>
                {favPersonagens && favPersonagens.length <= 0 && <span id="fav_message" >Nenhum personagem adicionado a lista ainda!</span>}
                <button
                    onClick={() => handleRemoveAllFavorites()}
                    className="fav_remove_button"
                >
                    Remover tudo
                </button>
            </div>
            <CharacterGrid characters={favPersonagens} />
        </div>
    );
};
