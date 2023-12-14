import { styles } from '../ui';
import { headings } from '../constants';
import { streamImg } from '../assets';

const Stream = () => {
  return (
    <section className={`${styles.flexCenter} flex-col px-72 py-44`}>
      <h1 className={styles.heading}>{headings[3].title}</h1>
      <p className={`${styles.paragraph} pt-3`}>{headings[3].description}</p>
      <img
        src={streamImg}
        alt="netflix_platform"
        className="w-5/12 h-5/12 pt-10 rounded-xl"
      />
    </section>
  );
};

export default Stream;
