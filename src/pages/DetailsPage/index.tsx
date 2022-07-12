import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ButtonFavorite } from "../../components/ButtonFavorite";
import { CardEpisode } from "../../components/CardEpisode";

import { fetchEpisodesThunk } from "../../store/actions/characters.actions";

import "./style.css";


/**
 * Esta é a página de detalhes. Aqui você pode mostrar a visão do personagem selecionado junto com a lista de episódios em que ele aparece
 *
 * TRABALHAR NESTE ARQUIVO É OPCIONAL E NÃO É NECESSÁRIO PARA APROVAÇÃO
 *
 * Uso:
 * ``` <DetailsPage /> ```
 *
 * @returns Página de detalhe
 */
export const DetailsPage = () => {
  const dispatch = useDispatch();
  const character = useSelector((state: any) => state.person.personagem.character);
  const indexArray = character?.id - 1;

  const isFavorito = useSelector((state: any) => state.person.personagens[indexArray]);
  const episodes = useSelector((state: any) => state.person.episodes);

  /**
   * Função que faz um map no array de episodios retornando somente o id no fim de cada url e formando um array com todos ex: [1, 2, 3, 4, 5]
   * @function arrayEpisodes
   * @param { string[] } episodios parametro array de strings
   * @returns array de strings ex: [1, 2, 3, 4, 5]
   */
  const arrayEpisodes = (episodios: string[]) => {

    let array = episodios.map(episodio => {
      let index = episodio.indexOf("e/");
      return episodio.slice(index + 2, episodio.length);
    })

    return array;
  }

  useEffect(() => {
    if (character?.episode) {
      let arrayIdEpisodes = arrayEpisodes(character.episode);
      fetchEpisodesThunk(arrayIdEpisodes)(dispatch);
    }
    return;
  }, [character?.episode, dispatch])

  return (
    <div className="container">
      <h3>{character?.name}</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src={character?.image}
            alt={character?.name}
          />
          <div className={"detalhe-header-texto"}>
            <p>{character?.name}</p>
            <p>Planeta: {character?.origin.name}</p>
            <p>Genero: {character?.gender}</p>
          </div>
        </div>
      </div>

      <h4>Lista de episódios em que o personagem apareceu</h4>
      <div className={"episodios-grade"}>
        {episodes?.length ?
          episodes.map((episodio: any) => {
            return <CardEpisode episodio={episodio} key={episodio.id} />
          })
          :
          <span className="error_message">Que pena :( não apareceu em nenhum episodio!</span>
        }

      </div>

    </div>

  );
};
