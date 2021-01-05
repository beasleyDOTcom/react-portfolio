import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';

function App() {
  return (

    <div className="App">
      <section className="overAll">
        <Header/>
        <Main/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
