import BaseHeading from '../../base/BaseHeading/BaseHeading';

import styles from './AppHeader.module.scss';

import logo from '../../../assets/icons/logo192.png';

const AppHeader: React.FC = () => (
  <>
    <BaseHeading className={styles.heading}>
      Dooogs <img src={logo} alt="Dog icon" className={styles.icon} />
    </BaseHeading>
    <p className={styles.text}>
      The cutest app in the world! Watch out for your sugar level. To see more
      cute dogs just click on a breed from the list.
      <br />
      Relax and enjoy!
    </p>
  </>
);

export default AppHeader;
