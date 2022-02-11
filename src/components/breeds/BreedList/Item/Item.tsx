import { memo, useState } from 'react';
import { Breed } from '../../../../types';

import styles from './Item.module.scss';

interface Props {
  breed: string;
  onClick: (value: Breed) => void;
  subBreeds: string[];
}

const BreedListItem: React.FC<Props> = ({ breed, onClick, subBreeds }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsion = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  const handleClick = () => {
    if (subBreeds.length > 0) {
      toggleCollapsion();
      return;
    }

    onClick(breed);
  };

  const handleSubBreedClick = (subBreed: string) => () => {
    onClick({name: breed, subBreed});
  };

  return (
    <>
      <li>
        <button onClick={handleClick} className={styles.button}>
          {breed}
          {subBreeds.length > 0 && (
            <img
              src="/icons/arrow.svg"
              alt=""
              className={`${styles.arrow} ${
                isCollapsed && styles.arrowCollapsed
              }`}
            />
          )}
        </button>
        {isCollapsed && (
          <ul className={styles.subList}>
            {subBreeds.map((subBreed) => (
              <li key={subBreed}>
                <button
                  onClick={handleSubBreedClick(subBreed)}
                  className={styles.subButton}
                >
                  {subBreed}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default memo(BreedListItem);
