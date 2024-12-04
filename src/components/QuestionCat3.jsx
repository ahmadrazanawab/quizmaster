import React, { useState } from 'react'

const QuestionCat3 = () => {
    const [inputs, setInputs] = useState([{ id: 1, value: "" }]); // Array of input objects

    const handleInputChangeD = (id, value) => {
      setInputs((prevInputs) =>
        prevInputs.map((input) =>
          input.id === id ? { ...input, value } : input
        )
      );
  
      // Add a new input if typing in the last one
      if (inputs[inputs.length - 1].id === id && value.trim() !== "") {
        setInputs([...inputs, { id: inputs.length + 1, value: "" }]);
      }
    };
  
    const handleDeleteInput = (id) => {
      setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
    };
  return (
    <div className='pt-24'>
       <div>
      <h2>Dynamic Input Manager</h2>
      {inputs.map((input) => (
        <div key={input.id} style={{ marginBottom: "10px", display: "flex" }}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChangeD(input.id, e.target.value)}
            placeholder={`Input ${input.id}`}
            style={{ marginRight: "10px" }}
          />
          <button onClick={() => handleDeleteInput(input.id)}>Delete</button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default QuestionCat3
