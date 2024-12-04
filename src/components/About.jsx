import React, { useContext, useState } from "react";
import context from "../context/context";

const About = () => {
    const dropDownName = [
        { id: 1, name: 'volvo' },
        { id: 2, name: 'saab' },
        { id: 3, name: 'mercedes' },
        {id:4,name:'audi'},
    ]
    const { deleteCategory } = useContext(context);
    
    const [inputs, setInputs] = useState([""]); // Initial array with one empty string

    const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value; // Update the value of the specific input
    setInputs(updatedInputs);

    // Add a new input field if typing in the last one
    if (index === inputs.length - 1 && value.trim() !== "") {
      setInputs([...updatedInputs, ""]); // Add a new empty input at the end
    }
  };
  return (
    <div className="pt-40">
      <h4>this is About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        officiis odit animi in, minus ad labore id. Labore, hic corporis
        cupiditate modi doloribus dignissimos. Veritatis ipsam non veniam minus
        facilis iste eum laborum at.
          </p>
          
      <select name="cars" className="border-[2px] border-[#333] rounded px-2 py-1 outline-none" id="cars">
        {
                  dropDownName.map(({name,id}) => (
                      <option className="" key={id} value={id}>{name}</option>
           ))       
        }
          </select>
          

          <div>
      </div>
          
        <button onClick={()=>{deleteCategory}} className="border-[1px] border-gray-900 px-2 py-1 rounded">click delete</button>

    <div>
      <h2>Dynamic Input Fields</h2>
      {inputs.map((value, index) => (
        <div key={index} className="my-2" style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={value} className="outline-none border-[1px] border-gray-800 rounded px-2 py-1"
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`Input ${index + 1}`}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default About;
