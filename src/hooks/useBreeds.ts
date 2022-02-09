import { fetchBreeds } from '../services/dogs';
import { useEffect, useState } from 'react';

const useBreeds = () => {
  const [breeds, setBreeds] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const data = await fetchBreeds();

      setBreeds(Object.keys(data.message));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else if (typeof error === 'string') {
        setError(error);
      } else {
        setError('Unknown error ocurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { breeds, isLoading, error, refetch: fetchData };
};

export default useBreeds;
