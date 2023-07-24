import { Newsletter } from '../components';
import { headings } from '../constants';
import styles from '../styles';

const Hero = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.transparentBg} flex flex-col`}>
      <h1 className={`${styles.heading} mt-36`}>{headings[0].title}</h1>
      <p className={`${styles.paragraph} my-5`}>{headings[0].description}</p>
      <Newsletter />
    </section>
  );
};

export default Hero;
