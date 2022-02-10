import BreedListItem from './Item/Item';
import BaseError from '../../base/BaseError/BaseError';

import useBreeds from '../../../hooks/useBreeds';

import styles from './BreedList.module.scss';

const BreedList: React.FC = () => {
  const { breeds, error } = useBreeds();

  if (error) {
    return <BaseError message={error} />;
  }

  return (
    <ul className={styles.list}>
      {breeds?.map((breed: string) => (
        <BreedListItem key={breed} breed={breed} />
      ))}
    </ul>
  );
};

export default BreedList;
