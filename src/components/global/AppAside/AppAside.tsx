import styles from './AppAside.module.scss';

interface Props {
  images: string[];
}

const AppAside: React.FC<Props> = ({ images }) => (
  <aside className={styles.aside}>
    <div className={styles.imageWrapper}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Cute dogs collage"
          className={styles.image}
          // load first image immediately
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  </aside>
);

export default AppAside;
