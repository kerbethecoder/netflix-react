import { styles } from '../ui';
import { headings } from '../constants';
import { downloadImg } from '../assets';

const Download = () => {
  return (
    <section className={`${styles.flexBetween} px-72 py-32`}>
      <div>
        <img src={downloadImg} alt="netflix_phone" />
      </div>

      <div>
        <h1 className={styles.heading}>{headings[2].title}</h1>
        <p className={`${styles.paragraph} pt-8`}>{headings[2].description}</p>
      </div>
    </section>
  );
};

export default Download;
