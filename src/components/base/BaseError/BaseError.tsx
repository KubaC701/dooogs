import styles from './BaseError.module.scss';

import errorIcon from '../../../assets/icons/error.svg';
interface Props {
  message: string;
}

const BaseError: React.FC<Props> = ({ message }) => (
  <div className={styles.wrapper}>
    <img src={errorIcon} alt="Error" className={styles.icon} />
    <p>{message}</p>
  </div>
);

export default BaseError;
