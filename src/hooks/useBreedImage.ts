import { useCallback, useEffect } from 'react';
import { fetchBreedImage } from '../services/dogs';
import useFetch from './useFetch';

const useBreedImage = (breed: string) => {
  const memoizedFetchBreedImage = useCallback(() => fetchBreedImage(breed), [breed]);

  const { data, error, fetchData, isLoading } = useFetch(memoizedFetchBreedImage);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { breedImage: data?.message, isLoading, error, refetch: fetchData };
};

export default useBreedImage;
