import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Form from './components/Form/index.js';

function App() {

  const [stafs, setStaf] = useState([]);

  const onNewStafAdded = (staf) => {
    console.log(staf);
    setStaf([...stafs, staf])
  }

  return (
    <div className="App">
      <Banner/>
      <Form onStafRegister={staf => onNewStafAdded(staf) }/>
    </div>
  );
}

export default App;
