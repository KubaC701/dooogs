import { fetchBreeds } from '../services/dogs';
import { useEffect, useMemo } from 'react';
import useFetch from './useFetch';

const useBreeds = () => {
  const { data, error, fetchData, isLoading } = useFetch(fetchBreeds);

  const breeds = useMemo(
    () => data?.message && Object.keys(data.message),
    [data],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { breeds, isLoading, error, refetch: fetchData };
};

export default useBreeds;
