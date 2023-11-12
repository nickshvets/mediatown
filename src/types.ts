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
};
