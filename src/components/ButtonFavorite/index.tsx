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
    const src = isFavorito ? "/images/star-filled.png" : "/images/star.png";

    return (
        <div className="botao_favorito" onClick={onClick}>
            <img src={src} alt={"favorito"} />
        </div>
    );
}
