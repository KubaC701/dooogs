import Modal from 'react-modal';

import BaseButton from '../../base/BaseButton/BaseButton';
import BaseError from '../../base/BaseError/BaseError';
import useBreedImage from '../../../hooks/useBreedImage';

import { Breed } from '../../../types';

import styles from './BreedModal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  breed: Breed;
}

Modal.setAppElement('#modal-root');

const BreedModal: React.FC<Props> = ({ isOpen, onClose, breed }) => {
  const url = breed.subBreed ? `${breed.name}/${breed.subBreed}` : breed.name;

  const { breedImage, error, refetch } = useBreedImage(url, {
    skip: !isOpen,
  });

  const title = breed.subBreed ? `${breed.name} ${breed.subBreed}` : breed.name;

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
        {title}
      </h1>
      {error ? (
        <BaseError message={error} />
      ) : (
        breedImage && (
          <img
            className={styles.image}
            src={breedImage}
            alt={title}
            key={breedImage}
          />
        )
      )}
      <BaseButton onClick={refetch}>Show me another cute photo!</BaseButton>
    </Modal>
  );
};

export default BreedModal;
