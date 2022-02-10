import { useCallback } from 'react';

import useFetch from './useFetch';
import { fetchBreedImage } from '../services/dogs';

const useBreedImage = (breed: string) => {
  const memoizedFetchBreedImage = useCallback(
    () => fetchBreedImage(breed),
    [breed],
  );

  const { data, error, fetchData, isLoading } = useFetch(
    memoizedFetchBreedImage,
  );

  return { breedImage: data?.message, isLoading, error, refetch: fetchData };
};

export default useBreedImage;
