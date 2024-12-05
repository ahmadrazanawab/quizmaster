import React, { useState } from 'react'

const QuestionCat3 = () => {
  const [inputText, setInputText] = useState('');
  const [selectedWord, setSelectedWord] = useState('');
  const [fields, setFields] = useState([{ id: 1, value: '' }]); // Initial set of input fields and checkboxes

  // Function to get the selected text
  const getSelectedText = () => {
    const inputElement = document.getElementById('textInput');
    const start = inputElement.selectionStart;
    const end = inputElement.selectionEnd;
    const selected = inputElement.value.substring(start, end);
    setSelectedWord(selected);
  };

  // Handle checkbox click for a specific field
  const handleCheckboxClick = (id) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, value: selectedWord } : field
      )
    );
  };

  // Add a new field
  const addField = () => {
    setFields([...fields, { id: fields.length + 1, value: '' }]);
  };

  return (
      <div className='bg-slate-300 pt-24 pb-10 px-10'>
         <div>
      <h1>Dynamic Text Selector</h1>
      <textarea
        id="textInput"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onMouseUp={getSelectedText} // Capture selected text on mouse release
        placeholder="Write something and select a word..."
        rows={5}
        cols={30}
      />
      <br />
      <button onClick={addField}>Add Field</button>
      <div>
        {fields.map((field) => (
          <div key={field.id} style={{ marginTop: '10px' }}>
            <label>
              <input
                type="checkbox"
                onClick={() => handleCheckboxClick(field.id)}
              />
              Copy selected word to Field {field.id}
            </label>
            <input
              type="text"
              value={field.value}
              readOnly
              placeholder={`Field ${field.id}`}
              style={{ marginLeft: '10px' }}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default QuestionCat3
