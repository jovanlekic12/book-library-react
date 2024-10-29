import { useState } from "react";
import Form from "./components/form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main__container">
      <h1 className="app__title">Book Library</h1>
      <h3 className="app__description">
        Use the button bellow to add to your library and watch your collection
        grow
      </h3>
      <button className="new__book__btn">New Book</button>
      <Form />
    </main>
  );
}

export default App;
