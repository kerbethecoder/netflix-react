import { logo } from '../assets';
import { styles, SelectionMenu, Button } from '../ui';

const Header = () => {
  return (
    <section className={`${styles.transparentBg} ${styles.flexBetween} px-72`}>
      <img src={logo} alt="netflix" className="w-32 h-32 " />

      <div className={styles.flexCenter}>
        <SelectionMenu />
        <Button title="Sign In" />
      </div>
    </section>
  );
};

export default Header;
