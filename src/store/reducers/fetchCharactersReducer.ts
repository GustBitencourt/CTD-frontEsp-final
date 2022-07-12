import {
  FETCH_EPISODES,
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTER_ID_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  FAVORITAR_CHARACTERS,
} from "../actions/characters.actions";
import { Info, Character, ActionType } from "../../types";

const initialState = {
  personagens: [],
  isFetching: false,
  errorMessage: undefined,
  episodes: [],
  personagem: {} as Character,
  paginacao: {} as Info,
};

export const fetchCharactersReducer = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        paginacao: action.payload.info,
        personagens: action.payload.results,
      };

    case FETCH_CHARACTER_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        personagem: action.payload,
      };

    case FETCH_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };

    case FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        isFetching: false,
        personagens: initialState.personagens,
        errorMessage: action.payload,
      };

    case FAVORITAR_CHARACTERS:
      return {
        ...state,
        personagens: state.personagens.map((personagem: Character) => {
          if (personagem.id !== action.payload) {
            return personagem;
          }
          return {
            ...personagem,
            favorito: !personagem.favorito,
          };
        }),
      };

    default:
      return state;
  }
};
