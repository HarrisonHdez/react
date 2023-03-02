import React, { useState } from "react";

function CodeQuestion() {
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === "B") {
      setMessage("¡Respuesta correcta!");
    } else {
      setMessage("Respuesta incorrecta, intenta de nuevo");
    }
  };

  return (
    <div>
      <pre>
        {`
          let numArray = [2, 4, 6, 8];
          let newNumArray = numArray.map(num => num * 2);
          console.log(newNumArray);
        `}
      </pre>
      <button onClick={() => handleOptionClick("A")}>A) [2, 4, 6, 8]</button>
      <button onClick={() => handleOptionClick("B")}>B) [4, 8, 12, 16]</button>
      <button onClick={() => handleOptionClick("C")}>C) [2, 4, 6, 8, 10]</button>
      <button onClick={() => handleOptionClick("D")}>D) [4, 6, 8, 10]</button>
      <p>You selected option: {selectedOption}</p>
      <p>{message}</p>
    </div>
  );
}

export default CodeQuestion;
