import React, { useState } from "react";
import Message from "./Message";
import form from "./form.css"


const Form = ({ selected }) => {
    console.log(selected);
    const [name, setName] = useState("");
    const [animalFav, setAnimalFav] = useState("");
    const [flag, setFlag] = useState(false);
    const [infoEnviada, setInfoEnviada] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFlag(true);

      if (name.trim().length >= 3 && animalFav.length >= 6) {
        setError(false);
        setInfoEnviada(true);
      } else {
        setError(true);
        setInfoEnviada(false);
      }
    };


    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <label>Animal Favorito: </label>
            <input type="text" onChange={(e) => setAnimalFav(e.target.value)} />
            <button type="submit">Enviar.</button>
          </form>
          {flag && <p>Por favor chequea que la información sea correcta.</p>}
          {infoEnviada && <Message name={name} animalFav={animalFav} />}
        </div>
      );
    };
    
    export default Form;