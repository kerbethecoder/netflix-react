import { GetStarted, styles } from '../ui';
import { headings } from '../constants';

const Hero = () => {
  return (
    <section className={`${styles.flexCenter} flex-col`}>
      <h1 className={`${styles.heading} mt-36`}>{headings[0].title}</h1>
      <p className={`${styles.paragraph} my-5`}>{headings[0].description}</p>
      <GetStarted />
    </section>
  );
};

export default Hero;
