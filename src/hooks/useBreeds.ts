import { useEffect, useMemo } from 'react';

import { fetchBreeds } from '../services/dogs';
import useFetch from './useFetch';

const useBreeds = () => {
  const { data, error, fetchData, isLoading } = useFetch(fetchBreeds);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const breeds = useMemo(
    () => data?.message && Object.entries(data.message),
    [data?.message],
  );

  return { breeds: breeds, isLoading, error, refetch: fetchData };
};

export default useBreeds;
