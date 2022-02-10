import Modal from 'react-modal';

import BaseButton from '../base/BaseButton/BaseButton';
import useBreedImage from '../../hooks/useBreedImage';

import styles from './BreedModal.module.scss';
interface Props {
  isOpen: boolean;
  onClose: () => void;
  breed: string;
}

Modal.setAppElement('#modal-root');

const BreedModal: React.FC<Props> = ({ isOpen, onClose, breed }) => {
  const { breedImage, error, refetch } = useBreedImage(breed);

  return (
    <Modal isOpen={isOpen} className={styles.modal} onRequestClose={onClose}>
      <button onClick={onClose} className={styles.closeButton}>
        <img src="/icons/close.svg" alt="Close" />
      </button>
      <h1 className={styles.heading}>{breed}</h1>
      {error ? (
        <div className={styles.errorWrapper}>
          <img
            src="/icons/error.svg"
            alt="Error"
            className={styles.errorIcon}
          />
          <p>{error}</p>
        </div>
      ) : (
        <img className={styles.image} src={breedImage} alt={breed} />
      )}
      <BaseButton onClick={refetch}>Show me another cute photo!</BaseButton>
    </Modal>
  );
};

export default BreedModal;
