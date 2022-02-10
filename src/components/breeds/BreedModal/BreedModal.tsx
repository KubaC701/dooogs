import Modal from 'react-modal';

import BaseButton from '../../base/BaseButton/BaseButton';
import BaseError from '../../base/BaseError/BaseError';

import useBreedImage from '../../../hooks/useBreedImage';

import styles from './BreedModal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  breed: string;
}

Modal.setAppElement('#modal-root');

const BreedModal: React.FC<Props> = ({ isOpen, onClose, breed }) => {
  const { breedImage, error, refetch } = useBreedImage(breed, {
    skip: !isOpen,
  });

  return (
    <Modal
      aria={{
        labelledby: 'heading',
      }}
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={{
        base: styles.overlay,
        afterOpen: styles.overlayAfterOpen,
        beforeClose: styles.overlayBeforeClose,
      }}
      onRequestClose={onClose}
      closeTimeoutMS={500}
      shouldReturnFocusAfterClose={false}
    >
      <button onClick={onClose} className={styles.closeButton}>
        <img src="/icons/close.svg" alt="Close" />
      </button>
      <h1 id="heading" className={styles.heading}>
        {breed}
      </h1>
      {error ? (
        <BaseError message={error} />
      ) : (
        breedImage && (
          <img
            className={styles.image}
            src={breedImage}
            alt={breed}
            key={breedImage}
          />
        )
      )}
      <BaseButton onClick={refetch}>Show me another cute photo!</BaseButton>
    </Modal>
  );
};

export default BreedModal;
