export const fetchData = async <ResponseType>(
  url: string,
): Promise<ResponseType> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not fetch data, received ${response.status}`);
  }

  const data = await response.json();
  return data;
};
