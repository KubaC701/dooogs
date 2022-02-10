import styles from './BaseError.module.scss';

interface Props {
  message: string;
}

const BaseError: React.FC<Props> = ({ message }) => (
  <div className={styles.wrapper}>
    <img src="/icons/error.svg" alt="Error" className={styles.icon} />
    <p>{message}</p>
  </div>
);

export default BaseError;
