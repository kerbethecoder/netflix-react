import { netflixPhone } from '../assets';
import { headings } from '../constants';
import styles from '../styles';

const Download = () => {
  return (
    <section
      className={`${styles.bgBlack} ${styles.flexRowBetween} px-72 py-32`}>
      <div>
        <img src={netflixPhone} alt="netflix_phone" />
      </div>

      <div>
        <h1 className={styles.heading}>{headings[2].title}</h1>
        <p className={`${styles.paragraph} pt-8`}>{headings[2].description}</p>
      </div>
    </section>
  );
};

export default Download;
