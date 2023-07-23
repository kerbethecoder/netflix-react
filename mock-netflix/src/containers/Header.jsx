import { netflix } from '../assets';
import { SelectionMenu, Button } from '../components';

const Header = () => {
  return (
    <section
      className="flex flex-row justify-between px-72"
      style={{ background: '#000' }}>
      <img src={netflix} alt="netflix" className="w-32 h-32 " />

      <div className="flex justify-center items-center">
        <SelectionMenu />
        <Button title="Sign In" />
      </div>
    </section>
  );
};

export default Header;
