import './App.css';
import logo from './logo.svg';

function App() {
  async function name() {
    const data = await (await fetch('api/v1/users/ab97b8d5-01b0-41ad-bbf5-06de177eb52a')).json();
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit and save <code>src/App.js</code> to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={name} type="button">
          hola
        </button>
      </header>
    </div>
  );
}

export default App;
