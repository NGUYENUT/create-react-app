import logo from './logo.svg';
import { useState } from "react"
import './App.css';

function App() {
  const [data, setData] = useState(null)

  const callFlaskAPI =  () => {
    const url = "flask-hello-world-teal-ten-86.vercel.app";
    fetch(url,{
      method: "GET",
    }).then((res)=>{
      console.log(res)
      return res.text();
    }).then((text)=>{
     console.log(text)
    })
  }
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
