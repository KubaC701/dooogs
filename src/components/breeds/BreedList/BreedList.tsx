import { useState } from 'react';

import BaseError from '../../base/BaseError/BaseError';
import BreedListItem from './Item/Item';
import BreedModal from '../BreedModal/BreedModal';

import useBreeds from '../../../hooks/useBreeds';

import styles from './BreedList.module.scss';

const BreedList: React.FC = () => {
  const { breeds, error } = useBreeds();
  const [activeBreed, setActiveBreed] = useState('');

  if (error) {
    return <BaseError message={error} />;
  }

  const handleCloseModal = () => {
    setActiveBreed('');
  };

  const handleClickItem = (value: string) => {
    setActiveBreed(value);
  };

  return (
    <>
      <ul className={styles.list}>
        {breeds?.map((breed: string) => (
          <BreedListItem key={breed} breed={breed} onClick={handleClickItem} />
        ))}
      </ul>
      {/* to render only one portal at once the modal is here, not in every single item */}
      <BreedModal
        breed={activeBreed}
        isOpen={!!activeBreed}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default BreedList;
