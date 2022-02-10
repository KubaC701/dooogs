import BreedListItem from './Item/Item';

import useBreeds from '../../hooks/useBreeds';

import styles from './BreedList.module.scss';

const BreedList = () => {
  const { breeds, isLoading, error } = useBreeds();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <ul className={styles.list}>
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
