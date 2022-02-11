import { useState } from 'react';

import styles from './SubBreedItem.module.scss';

interface Props {
  breed: string;
  subBreeds: string[];
  onClick: (value: string) => void;
}

const SubBreedItem: React.FC<Props> = ({ breed, subBreeds, onClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsion = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  const handleClick = (subBreed: string) => () => {
    onClick(`${breed}/${subBreed}`);
  };

  return (
    <li className={styles.item}>
      <button onClick={toggleCollapsion} className={styles.button}>
        {breed}
      </button>
      {isCollapsed && (
        <ul className={styles.subList}>
          {subBreeds.map((subBreed) => (
            <li key={subBreed} className={styles.subItem}>
              <button
                onClick={handleClick(subBreed)}
                className={styles.subButton}
              >
                {subBreed}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SubBreedItem;
