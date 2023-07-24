import { netflix } from '../assets';
import { SelectionMenu, Button } from '../components';
import styles from '../styles';

const Header = () => {
  return (
    <section
      className={`${styles.transparentBg} flex flex-row justify-between px-72`}>
      <img src={netflix} alt="netflix" className="w-32 h-32 " />

      <div className={styles.flexCenter}>
        <SelectionMenu />
        <Button title="Sign In" />
      </div>
    </section>
  );
};

export default Header;
