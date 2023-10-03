import { netflixProfiles } from '../assets';
import { headings } from '../constants';
import styles from '../styles';

const Profile = () => {
  return (
    <section
      className={`${styles.bgBlack} ${styles.flexRowBetween} px-64 py-44 gap-16`}>
      <div>
        <img
          src={netflixProfiles}
          alt="netflix_profiles"
          className="rounded-xl"
        />
      </div>

      <div>
        <h1 className={styles.heading}>{headings[4].title}</h1>
        <p className={`${styles.paragraph} pt-8`}>{headings[4].description}</p>
      </div>
    </section>
  );
};

export default Profile;
