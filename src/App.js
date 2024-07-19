import logo from './logo.svg';
import { useState } from "react"
import './App.css';

function App() {
  const [data, setData] = useState(null)

  const callFlaskAPI = async () => {
      const response = await fetch(`https://flask-hello-world-teal-ten-86.vercel.app`)
      const newData = await response.text()
      console.log(newData)
      setData(newData)
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => callFlaskAPI()}>Click me for the FLASK API RESULT</button>

        <p>
          {data ? data : "no data"}
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
    </div>
  );
}

export default App;
