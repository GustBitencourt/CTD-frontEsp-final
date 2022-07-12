import { Episode } from "../../types";

import "./style.css";

type Props = {
  episodio: Episode;
}

/**
 * Card para cada episódio na visualização do personagem. *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos episódios
 *
 * @param { Props }
 * @returns Elemento JSX
 */

export const CardEpisode = ({ episodio }: Props) => {
  return (
    <div className="card-episodio">
      <h4>{episodio.name}</h4>
      <div>
        <span>{episodio.episode}</span>
        <span>Lançado em: {episodio.air_date}</span>
      </div>
    </div>
  );
};
