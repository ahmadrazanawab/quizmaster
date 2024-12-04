import React, { useState } from 'react'
import Context from './context'
const contextProvider = ({ children }) => {
    const [inputsCategory, setInputsCategory] = useState([{ id: 1, value: "" }]);
    const [inputsAns, setInputsAns] = useState([{ AnsId: 1, AnsValue: "" }]);
    const [nextId, setNextId] = useState(2);

    // Start Add Category Input
    const handleInputChangeCategory = (id, value) => {
        setInputsCategory((prevInputs) =>
          prevInputs.map((input) =>
              input.id === id ? { ...input, value } : input
          )
        );
        console.log(id);
        if (inputsCategory[inputsCategory.length - 1].id === id && value.trim() !== "") {
            setInputsCategory([...inputsCategory, { id: nextId, value: "" }]);
            setNextId((prev) => prev + 1); 
        }
      };
    
    // End Add Category Input

    // Start Add Asnwer Input
    const handleInputChangeAns = (AnsId,AnsValue) => {
        // const updatedInputs = [...inputsAns];
        // updatedInputs[index] = value; 
        // setInputsAns(updatedInputs);
    
        // if (index === inputsAns.length - 1 && value.trim() !== "") {
        //     setInputsAns([...updatedInputs, ""]); 
        // }
        console.log(AnsId);
        setInputsAns((prevInputAns) => (
            prevInputAns.map((input) => (
                input.AnsId === AnsId ? { ...input, AnsValue } : input
            ))
        ));
        
        if (inputsAns[inputsAns.length - 1].AnsId === AnsId && AnsValue.trim() !== "") {
            setInputsAns([...inputsAns, { AnsId: nextId, AnsValue: '' }]);
            setNextId((prev) => prev + 1);
        }

    };

    // End Add Answer input

    // Delete Category input field
    const handleDeleteCategory = (id) => {
        const del = setInputsCategory((prevInputs) => prevInputs.filter((input) => input.id !== id));
        console.log(del);
    };

    // Delete Answer input field
    const handleDeleteAnswer = (AnsId) => {
        const del = setInputsAns((prevInputs) => prevInputs.filter((input) => input.AnsId !== AnsId));
        console.log(del);
    }
    
  return (
    <Context.Provider value={{inputsCategory,inputsAns,handleInputChangeCategory,handleInputChangeAns,handleDeleteCategory,handleDeleteAnswer}}>
      {children}
    </Context.Provider>
  )
}

export default contextProvider
