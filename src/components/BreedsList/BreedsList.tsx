import useBreeds from "../../hooks/useBreeds";

const BreedsList = (): JSX.Element => {
  const { breeds, isLoading, error } = useBreeds();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <ul>
      {breeds?.map((breed: string) => (
        <li key={breed}>{breed}</li>
      ))}
    </ul>
  );
};

export default BreedsList;