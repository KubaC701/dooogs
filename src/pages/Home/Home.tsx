import AppAside from '../../components/global/AppAside/AppAside';
import AppHeader from '../../components/global/AppHeader/AppHeader';
import BreedList from '../../components/breeds/BreedList/BreedList';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const leftImages = [
    'background-left.png',
    'background-left-2.png',
    'background-left-3.png',
    'background-left.png',
    'background-left-2.png',
    'background-left-3.png',
    'background-left-2.png',
  ];

  const rightImages = [
    'background-right.png',
    'background-right-2.png',
    'background-right-3.png',
    'background-right.png',
    'background-right-2.png',
    'background-right-3.png',
    'background-right-2.png',
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
