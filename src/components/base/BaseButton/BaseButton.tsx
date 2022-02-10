import styles from './BaseButton.module.scss';

const BaseButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => (
  <button className={`${styles.button} ${className}`} {...props}>
    {children}
  </button>
);

export default BaseButton;
