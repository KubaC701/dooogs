import { useCallback, useState } from 'react';

import BaseError from '../../base/BaseError/BaseError';
import BreedListItem from './Item/Item';
import BreedModal from '../BreedModal/BreedModal';
import useBreeds from '../../../hooks/useBreeds';

import { Breed } from '../../../types';

import styles from './BreedList.module.scss';

const BreedList: React.FC = () => {
  const { breeds, error } = useBreeds();
  const [activeBreed, setActiveBreed] = useState<Breed>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickItem = useCallback((value: Breed) => {
    setIsModalOpen(true);
    setActiveBreed(value);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  if (error) {
    return <BaseError message={error} />;
  }

  return (
    <>
      <ul className={styles.list}>
        {breeds &&
          Object.entries(breeds)?.map(([breed, subBreeds]) => (
            <BreedListItem
              key={breed}
              breed={breed}
              onClick={handleClickItem}
              subBreeds={subBreeds}
            />
          ))}
      </ul>
      {/* to render only one portal at once the modal is here, not in every single item */}
      {activeBreed && (
        <BreedModal
          breed={activeBreed}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default BreedList;
