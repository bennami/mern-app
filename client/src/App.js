import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [title, setTitle] = useState();
  return (
    <div className="App">
    <h1>hey</h1>
      <form action="">
        <div className="form-input">
          <input type="text"
                 name="title"
                 value={""}
                 onChange={2}
                 placeholder={"title"}

          />
        </div>
        <div className="form-input">
          <textarea placeholder={"body"} name="body" id="" cols="30" rows="10" value={""} onChange={2}>

          </textarea>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
