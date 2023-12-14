import {
  Hero,
  Header,
  Platforms,
  Download,
  Stream,
  Profile,
  FAQs,
  Newsletter,
  Footer,
} from './components';
import { heroBG } from './assets';

const App = () => {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${heroBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <>
      <div style={bgStyle}>
        <Header />
        <Hero />
      </div>
      <div className="darkBG">
        <Platforms />
        <Download />
        <Stream />
        <Profile />
        <FAQs />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default App;
