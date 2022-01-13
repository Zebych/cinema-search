import { axiosConfig } from './apiConfig';

const key = process.env.REACT_APP_API_KEY;

export const API = {
  searchFilmsByTitle(title: string) {
    const query = `/?apikey=${key}&s=${title}`;
    return axiosConfig.get(query);
  },
};
