import AppAside from '../../components/global/AppAside/AppAside';
import AppHeader from '../../components/global/AppHeader/AppHeader';
import BreedList from '../../components/breeds/BreedList/BreedList';

import styles from './Home.module.scss';

import backgroundLeft from '../../assets/images/background-left.png';
import backgroundLeft2 from '../../assets/images/background-left-2.png';
import backgroundLeft3 from '../../assets/images/background-left-3.png';

import backgroundRight from '../../assets/images/background-right.png';
import backgroundRight2 from '../../assets/images/background-right-2.png';
import backgroundRight3 from '../../assets/images/background-right-3.png';

const Home: React.FC = () => {
  const leftImages = [
    backgroundLeft,
    backgroundLeft2,
    backgroundLeft3,
    backgroundLeft,
    backgroundLeft2,
    backgroundLeft3,
    backgroundLeft2,
  ];

  const rightImages = [
    backgroundRight,
    backgroundRight2,
    backgroundRight3,
    backgroundRight,
    backgroundRight2,
    backgroundRight3,
    backgroundRight2,
  ];

  return (
    <div className={styles.container}>
      <AppAside images={leftImages} label="Left aside" />
      <main className={styles.content}>
        <AppHeader />
        <BreedList />
      </main>
      <AppAside images={rightImages} label="Right aside" />
    </div>
  );
};

export default Home;
