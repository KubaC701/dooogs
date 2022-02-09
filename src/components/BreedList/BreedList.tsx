import useBreeds from '../../hooks/useBreeds';
import BreedListItem from './Item/Item';

const BreedList = () => {
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
        <BreedListItem
          key={breed}
          breed={breed}
        />
      ))}
    </ul>
  );
};

export default BreedList;
