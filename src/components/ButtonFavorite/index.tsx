import { Star } from "phosphor-react";

import './style.css';

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo *
 * Terá que tipar as propriedades se utilizar este componente *
 *
 * @param { ButtonProps }
 * @returns Elemento JSX
 */

interface ButtonFavoriteProps {
    isFavorito: boolean;
    onClick?: any;
}

export const ButtonFavorite = ({ isFavorito, onClick }: ButtonFavoriteProps) => {
    const favoriteStatus = isFavorito ? <Star className="estrela" size={32} weight="fill" /> : <Star size={32} weight="thin" />;

    return (
        <div className="botao_favorito" onClick={onClick}>
            {favoriteStatus}
        </div>
    );
}
