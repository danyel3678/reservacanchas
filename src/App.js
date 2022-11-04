import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { <Header></Header>/*
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
        </a> */}
      </header>
      <main>
        <Router />
      </main>
      <footer>
        <h1></h1>
      </footer>
    </div>
  );
}

export default App;
