import { useCallback, useEffect, useState } from 'react';

const useFetch = <DataType>(fetchCallback: () => Promise<DataType>) => {
  const [data, setData] = useState<DataType>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await fetchCallback();

      setData(data);
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
  }, [fetchCallback]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, fetchData };
};

export default useFetch;
