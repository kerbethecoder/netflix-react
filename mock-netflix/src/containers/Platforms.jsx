import { headings } from '../constants';
import { netflixTv } from '../assets';
import styles from '../styles';

const Platforms = () => {
  return (
    <section
      className={`${styles.bgBlack} ${styles.flexRowBetween} px-72 py-44`}>
      <div>
        <h1 className={styles.heading}>{headings[1].title}</h1>
        <p className={`${styles.paragraph} pt-8 pr-10`}>
          {headings[1].description}
        </p>
      </div>

      <div>
        <img src={netflixTv} alt="netflix_on_tv" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Platforms;
