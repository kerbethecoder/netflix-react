import {
  Header,
  Download,
  FAQs,
  Footer,
  Hero,
  Newsletter,
  Platforms,
  Profile,
  Stream,
} from './containers';
import styles from './styles';

const App = () => {
  return (
    <div>
      <div className={`${styles.transparentBg} ${styles.collageBg}`}>
        <Header />
        <Hero />
      </div>

      <div>
        <Platforms />
        <Download />
        <Stream />
        <Profile />
        <FAQs />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
