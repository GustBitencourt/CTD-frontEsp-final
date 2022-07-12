import { CardCharacter } from '../CardCharacter';
import { Character } from '../../types';

import './style.css';

/**
 * Grade de personagens para a página inicial
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 * @returns Elemento JSX
 */

type Person = {
    characters?: Character[],
}

export const CharacterGrid = ({ characters }: Person) => {
    return (
        <div className="grade-personagens">
            {characters &&
                characters.map((character: Character) => (
                    <CardCharacter key={character.id} character={character} />
                ))
            }
        </div>
    );
};