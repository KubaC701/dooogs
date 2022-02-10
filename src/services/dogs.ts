import { fetchData } from '.';
import { BreedImageResponse, BreedsResponse } from '../types';

const API_URL = 'https://dog.ceo/api';

export const fetchBreeds = async () => {
  const response = await fetchData<BreedsResponse>(
    `${API_URL}/breeds/list/all`,
  );

  return response;
};

export const fetchBreedImage = async (breed: string) => {
  const response = await fetchData<BreedImageResponse>(
    `${API_URL}/breed/${breed}/images/random`,
  );

  return response;
};
