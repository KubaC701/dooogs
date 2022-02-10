import styles from './BaseHeading.module.scss';

const BaseHeading: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1 {...props} className={`${styles.heading} ${className}`}>
      {children}
    </h1>
  );
};

export default BaseHeading;
