import logo from '../_assets/logo512.png';
// import '../_sass/home.scss';
import '../App.sass';

import Hero from '../_parts/home/home-sec1'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Hero/>
    </div>
  );
}

export default Home;