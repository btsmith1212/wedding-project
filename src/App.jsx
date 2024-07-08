import Header from './components/Header/Header.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import Message from './components/Message/Message.jsx';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Carousel/>
        <Message/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
