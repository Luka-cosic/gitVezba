
import './App.css';
import axios from "axios";

function App() {

  const handleServer = async ()=>{
    // fetch("/user")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
   const {data} = await axios.get("/user");
    console.log(data);
    
  }
  return (
    <div className="App">
      <h1>Sve super</h1>
      <button onClick={handleServer}>Slava ti</button>
      <h1>Bradonja</h1>
      <h1>Sama sam</h1>

    </div>
  );
}

export default App;
