import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Text } from "./components";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

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
      <Text content={"Hola como estas ?"}></Text>
      <button onClick={() => setClick(click + 1)}>Clickeame</button>
      <p>Hiciste click: {click} veces</p>
      <button onClick={() => setActive((active) => !active)}>
        {active ? "Desactivado" : "Activado"}
      </button>
    </>
  );
}

export default App;
