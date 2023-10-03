import styles from '../styles';

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => {
  return (
    <section>
      <div className={`${styles.transparentBg} ${styles.collageBg}`}>
        <section>{children}</section>
      </div>
    </section>
  );
};

export default Background;
