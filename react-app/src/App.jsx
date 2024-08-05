import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Text } from "./components";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";

function App() {
  const [click, setClick] = useState(0);
  const [active, setActive] = useState(true);

  //sin array de dependencias se ejecuta en cada render
  // useEffect(() => {
  //   console.log("Hola soy un useEffect");
  // },);

  //con array de dependencias se ejecuta al principio cuando se renderiza la primera vez
  useEffect(() => {
    console.log("Hola soy un useEffect");
  }, []);
  //cuando cualquiera de esas dependencias cambie, se vuelve a ejecutar el useEffect
  useEffect(() => {
    console.log(
      `Hola, soy un useEffect y el estado de count es igual a ${click}`
    );
  }, [click]);

  return (
    <>
      <NavBar />
      <Login />
    </>
  );
}

export default App;
