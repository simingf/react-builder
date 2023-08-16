import logo from "./logo.svg";
import "./App.css";

function App() {
  const temp = "<h1>hello</h1>";
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
        <div dangerouslySetInnerHTML={{ __html: String(temp) }} />
      </header>
    </div>
  );
}

export default App;
