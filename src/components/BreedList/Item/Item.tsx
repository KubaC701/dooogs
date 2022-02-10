import { useState } from 'react';

import BreedModal from '../../BreedModal/BreedModal';

import styles from './Item.module.scss';

interface Props {
  breed: string;
}

const BreedListItem: React.FC<Props> = ({ breed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={styles.item}>
        <button onClick={handleClick} className={styles.button}>
          {breed}
        </button>
      </li>
      <BreedModal breed={breed} isOpen={isModalOpen} onClose={handleClose} />
    </>
  );
};

export default BreedListItem;
