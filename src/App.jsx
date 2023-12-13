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

const App = () => {
  return (
    <div>
      <Background>
        <Header />
        <Hero />
      </Background>

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
