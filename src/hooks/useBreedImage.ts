import { useCallback, useEffect } from 'react';

import useFetch from './useFetch';
import { fetchBreedImage } from '../services/dogs';

interface Options {
  skip?: boolean;
}

const useBreedImage = (breed: string, options?: Options) => {
  const memoizedFetchBreedImage = useCallback(
    () => fetchBreedImage(breed),
    [breed],
  );

  const { data, error, fetchData, isLoading } = useFetch(
    memoizedFetchBreedImage,
  );

  useEffect(() => {
    if (options?.skip) {
      return;
    }

    fetchData();
  }, [fetchData, options?.skip]);

  return { breedImage: data?.message, isLoading, error, refetch: fetchData };
};

export default useBreedImage;
