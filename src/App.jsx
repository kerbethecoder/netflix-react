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
import Background from './components/Background';
// import styles from '../styles';

const App = () => {
  return (
    <div>
      {/* <div className={`${styles.transparentBg} ${styles.collageBg}`}> */}
      <Background>
        <Header />
        <Hero />
      </Background>
      {/* </div> */}

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
