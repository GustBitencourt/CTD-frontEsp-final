import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { ButtonFavorite } from '../ButtonFavorite';

import { Character } from '../../types';
import { favoritarCharacters, fetchCharacterIDThunk } from '../../store/actions/characters.actions';

import "./style.css";

type Person = {
  character: Character;
}

/**
 * Card para cada personagem dentro da grade de personagem.
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 * @returns Elemento JSX
 */
export const CardCharacter = ({ character }: Person) => {
  const dispatch = useDispatch();

  const handlerFavorito = () => {
    dispatch(favoritarCharacters(character.id));
  }

  const handlerDetalhe = () => {
    fetchCharacterIDThunk(character.id)(dispatch);
  }

  return (
    <>
      <div className="card-personagem">
        <Link onClick={handlerDetalhe} to="/detalhe">
          <img
            src={character.image}
            alt={character.name}
          />
        </Link>

        <div className="card-personagem-body">
          <span>{character.name}</span>
          <ButtonFavorite onClick={handlerFavorito} isFavorito={character.favorito} />
        </div>
      </div>
    </>
  );
};
