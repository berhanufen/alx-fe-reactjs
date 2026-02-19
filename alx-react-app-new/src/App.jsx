import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />
      <UserProfile name="John Doe" age={28} bio="Developer who loves traveling to new cities." />
      <WelcomeMessage />
      <Counter />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
