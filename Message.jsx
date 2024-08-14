import React from "react";

const Message = ({ name, animalFav }) => {
  return (
    <div>
      <h2>Hola, {name}!</h2>
      <h4>Tu animal favorito es: {animalFav}.</h4>
    </div>
  );
};

export default Message;