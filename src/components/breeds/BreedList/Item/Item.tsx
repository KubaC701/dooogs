import { memo } from 'react';

import styles from './Item.module.scss';

interface Props {
  breed: string;
  onClick: (value: string) => void;
}

const BreedListItem: React.FC<Props> = ({ breed, onClick }) => {
  const handleClick = () => {
    onClick(breed);
  };

  return (
    <>
      <li className={styles.item}>
        <button onClick={handleClick} className={styles.button}>
          {breed}
        </button>
      </li>
      {}
    </>
  );
};

export default memo(BreedListItem);
