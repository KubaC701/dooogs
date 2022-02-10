import BaseHeading from '../../base/BaseHeading/BaseHeading';

import styles from './AppHeader.module.scss';

const AppHeader: React.FC = () => (
  <BaseHeading className={styles.heading}>
    Dooogs <img src="/logo192.png" alt="Dog icon" className={styles.icon} />
  </BaseHeading>
);

export default AppHeader;
