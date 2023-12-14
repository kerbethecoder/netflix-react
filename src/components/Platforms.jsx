import { styles } from '../ui';
import { platformImg } from '../assets';
import { headings } from '../constants';

const Platforms = () => {
  return (
    <section className={`${styles.flexBetween} px-72 py-44`}>
      <div>
        <h1 className={styles.heading}>{headings[1].title}</h1>
        <p className={`${styles.paragraph} pt-8 pr-10`}>
          {headings[1].description}
        </p>
      </div>

      <div>
        <img src={platformImg} alt="netflix_on_tv" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Platforms;
