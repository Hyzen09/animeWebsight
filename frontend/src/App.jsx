import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [str, setstr] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/forntPage")
      .then(function (response) {
        // handle success
        setstr(response.data.data)
        console.log(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  });
  return (
    <>
      <h1>Hi</h1>
      {str}
    </>
  );
}

export default App;
