import Modal from 'react-modal';
import useBreedImage from '../../hooks/useBreedImage';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  breed: string;
}

Modal.setAppElement('#modal-root');

const BreedModal: React.FC<Props> = ({ isOpen, onClose, breed }) => {
  const { breedImage, error, isLoading, refetch } = useBreedImage(breed);

  return (
    <Modal isOpen={isOpen}>
      <button onClick={onClose}>X</button>
      <h1>{breed}</h1>
      <img src={breedImage} alt={breed} />
      <button onClick={refetch}>Show me another cute photo!</button>
    </Modal>
  );
};

export default BreedModal;
