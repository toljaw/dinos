import {useEffect, useState} from 'react'
import './App.css'
import DinoList from "./Components/DinoList.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
      fetch('http://localhost:5027/api/hello')  //API Endpunkt
          .then(res => res.json())
          .then((data) => setMessage(data.message))
          .catch((err) => console.error('Fehler beim Laden:', err));
  }, []);

  return (
    <>
        <h2>{message}</h2>
        <h1>Dinos</h1>
        <DinoList/>


    </>
  )
}

export default App
