import styles from '../styles';
import { headings } from '../constants';
import { netflixPlatform } from '../assets';

const Stream = () => {
  return (
    <section
      className={`${styles.bgBlack} ${styles.flexCenter} flex-col px-72 py-44`}>
      <h1 className={styles.heading}>{headings[3].title}</h1>
      <p className={`${styles.paragraph} pt-3`}>{headings[3].description}</p>
      <img
        src={netflixPlatform}
        alt="netflix_platform"
        className="w-5/12 h-5/12 pt-10 rounded-xl"
      />
    </section>
  );
};

export default Stream;
