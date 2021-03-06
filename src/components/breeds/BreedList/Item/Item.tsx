import { memo, useState } from 'react';
import { Collapse } from 'react-collapse';

import { Breed } from '../../../../types';

import styles from './Item.module.scss';

import arrowIcon from '../../../../assets/icons/arrow.svg'

interface Props {
  breed: string;
  onClick: (value: Breed) => void;
  subBreeds: string[];
}

const BreedListItem: React.FC<Props> = ({ breed, onClick, subBreeds }) => {
  const [isOpened, setIsOpened] = useState(false);

  const hasSubBreeds = subBreeds.length > 0;

  const toggleOpened = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  const handleClick = () => {
    if (hasSubBreeds) {
      toggleOpened();
      return;
    }

    onClick(breed);
  };

  const handleSubBreedClick = (subBreed: string) => () => {
    onClick({ name: breed, subBreed });
  };

  return (
    <>
      <li>
        <button onClick={handleClick} className={styles.button}>
          {breed}
          {hasSubBreeds && (
            <img
              src={arrowIcon}
              alt=""
              className={`${styles.arrow} ${isOpened && styles.arrowCollapsed}`}
            />
          )}
        </button>

        <Collapse isOpened={isOpened}>
          <ul className={styles.subList}>
            {subBreeds.map((subBreed) => (
              <li key={subBreed}>
                <button
                  onClick={handleSubBreedClick(subBreed)}
                  className={`${styles.button} ${styles.subButton}`}
                  tabIndex={isOpened ? 0 : -1}
                >
                  {subBreed}
                </button>
              </li>
            ))}
          </ul>
        </Collapse>
      </li>
    </>
  );
};

export default memo(BreedListItem);
