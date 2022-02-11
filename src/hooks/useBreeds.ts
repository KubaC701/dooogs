import { useEffect } from 'react';

import { fetchBreeds } from '../services/dogs';
import useFetch from './useFetch';

const useBreeds = () => {
  const { data, error, fetchData, isLoading } = useFetch(fetchBreeds);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { breeds: data?.message, isLoading, error, refetch: fetchData };
};

export default useBreeds;
