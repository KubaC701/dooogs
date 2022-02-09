import { useState } from 'react';
import BreedModal from '../../BreedModal/BreedModal';

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
      <li>
        <button onClick={handleClick}>{breed}</button>
      </li>
      <BreedModal breed={breed} isOpen={isModalOpen} onClose={handleClose} />
    </>
  );
};

export default BreedListItem;
