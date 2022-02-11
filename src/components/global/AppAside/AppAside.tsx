import styles from './AppAside.module.scss';

interface Props {
  images: string[];
  label: string;
}

const AppAside: React.FC<Props> = ({ images, label }) => (
  <aside className={styles.aside} aria-label={label}>
    <div className={styles.imageWrapper}>
      {images.map((image, index) => (
        <img
          key={index}
          src={`/images/${image}`}
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
