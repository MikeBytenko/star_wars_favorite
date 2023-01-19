export interface IFavorite {
  id: string;
  gender: string;
}
export interface ISingleUser {
  birthYear: string;
  gender: string;
  homeworld: {
    name: string;
    ['__typename']: string;
  };
  id: string;
  species: {
    name: string;
    ['__typename']: string;
  };
  height: number;
  hairColor: string;
  mass: number;
  skinColor: string;
  eyeColor: string;
  name: string;
}

export interface IEdge {
  cursor: string;
  node: ISingleUser;
}

export interface IGetAllUsers {
  allPeople: {
    totalCount: number;
    edges: IEdge[];
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: boolean;
    };
  };
}

export interface IGetUserVariables {
  first?: number | null;
  last?: number | null;
  before?: string | null;
  after?: string | null;
}
