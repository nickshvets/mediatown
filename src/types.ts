export type MediaType = {
  id?: number;
  title: string;
  type: string;
  genre: string;
  releaseYear: number;
  rating: number;
  startDate?: Date;
  image?: string;
};

export const emptyMedia: MediaType = {
  title: '',
  type: '',
  genre: '',
  releaseYear: 0,
  rating: 0,
  image: '',
};

export type ErrorObjectType = {
  title: boolean;
  type: boolean;
  genre: boolean;
  releaseYear: boolean;
  rating: boolean;
  image: boolean;
};

export const emptyErrors: ErrorObjectType = {
  title: false,
  type: false,
  genre: false,
  releaseYear: false,
  rating: false,
  image: false,
};
