import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('') //form element likes to initialize with '' empty string
  
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label htmlFor='name'>
            Name:
            <input type='text' name='name' 
              onChange={e => setName(e.target.value)} value={name} />
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
