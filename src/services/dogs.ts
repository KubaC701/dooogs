import { BreedsResponse } from '../types';

const API_URL = 'https://dog.ceo/api/breeds';

export const fetchBreeds = async (): Promise<BreedsResponse> => {
  const response = await fetch(`${API_URL}/list/all`);

  if (!response.ok) {
    throw new Error(`Could not fetch breeds, received ${response.status}`);
  }
  
  const data = await response.json();
  return data;
};
