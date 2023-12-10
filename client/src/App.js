
import './App.css';
import { getServer  } from './api/index.js';

function App() {

  

  const handleServer = async ()=>{
    try {
      const {data} = await getServer();
      console.log(data);
      
    } catch (error) {
      console.log(error);
      
    }
    // fetch("/user")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
   
   
    
  }
  return (
    <div className="App">
      <h1>Sve super</h1>
      <button onClick={handleServer}>Slava ti</button>
      <h1>Bradonja</h1>
      <h1>Sama sam</h1>
      <h1>Sama sam i bez tebe</h1>


    </div>
  );
}

export default App;
