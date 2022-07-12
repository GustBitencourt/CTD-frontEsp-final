export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string;
  url: string;
  created: string;
  favorito: boolean;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Api {
  info: Info;
  results: Character[];
}

export type GlobalState = {
  person: {
    personagens: {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: object;
      location: object;
      image: string;
      episode: string;
      url: string;
      created: string;
      favorito: boolean;
    }[];
    isFetching: boolean;
    errorMessage: string;
    paginacao: Info;
    episodes: Episode[];
  };
};

export type ActionType = {
  type: string;
  payload?: any;
};
