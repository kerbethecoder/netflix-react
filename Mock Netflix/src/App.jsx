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

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
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
