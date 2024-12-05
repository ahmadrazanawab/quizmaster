import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { GrChapterAdd } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";

const QuestionCate2 = () => {
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
    <div className='flex md:mx-20 mx-8 border-l-8 my-10  border-sky-400'>
    <div className='shadow-sm w-[100%] bg-slate-50 pt-4 pb-14'>
          <div className='flex mx-12 justify-between py-4'>
              <p className='text-xl cursor-pointer'>Question 2</p>
          </div>
          <div className='mx-10 my-1'>
              <div>
                  {/* <label htmlFor="question" className='mx-2'>Preview <span className='text-red-500'>*</span></label> */}
                      <div className='flex md:flex-row flex-col md:items-center'>
                    <div className='flex flex-col justify-center'>
                      <label htmlFor="question" className='mx-2'>Preview <span className='text-red-500'>*</span></label>
                       <input type="text" className='bg-white shadow-sm xl:w-[700px] md:w-[300px] max-w-[300px] h-10 rounded outline-none px-2 py-1 mx-2 my-2' id='question' name='question1' placeholder='A quick_ _ _ fox jumed over a _ _ _' />
                       </div>
                        <label htmlFor="img"> <input type="file" className='hidden' name="txt,png,pdf,jpn" id="img" /> <CiImageOn className='cursor-pointer ' id='img' size={25} /></label>
                          <div className='md:ml-10 mx-1 flex md:flex-col flex-row'>
                              <label htmlFor="cloz" className='flex items-center'>Categorize <span className='mx-2'><BsQuestionCircle className='text-green-600 cursor-pointer' size={20} /></span></label> 
                              <label htmlFor="point" className='flex flex-col mt-4'><span className='text-sm'>Points</span><input type="text" className='shadow-sm outline-none w-28 h-10 rounded px-2 py-4 my-1' name="marks" id="point" /></label>
                        </div>
                      
                </div> 
              </div>
            </div>
            <div className='mx-10 my-1'>
              <div>
                  <label htmlFor="question2" className='mx-2'>Sentance <span className='text-red-500'>*</span></label>
                  <div className=''>
                          <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} onMouseUp={getSelectedText}
                              name="question2" id="textInput" cols="2" className='mx-2 w-[60%] h-16 outline-none shadow-sm rounded px-2 py-1' placeholder='A quick brown fox jumped over a fence' rows="2">
                          </textarea>
                          <label htmlFor="addfield" className='flex ml-5 cursor-pointer items-center justify-between max-w-[120px]  my-2 mx-2 border-[1px] border-gray-900 rounded px-2 py-1'>
                              <h4 id='addfield'>Add field</h4><span><GrChapterAdd onClick={addField} id='addfield' size={20} /></span>
                          </label>
                  </div> 
              </div>
              </div>
              <div className='flex flex-col md:mx-10 mx-2'>
                  {fields.map((field)=>(<label key={field.id} htmlFor="color1" className='flex'>
                      <input type="checkbox" onClick={() => handleCheckboxClick(field.id)} className='' name="" id="" />
                      <input type="text" value={field.value} readOnly
                          className='md:px-4 px-2  py-1 shadow-sm border-[1px] border-[#333] rounded mx-2 my-1 outline-none' name="clr" id="" placeholder={`Field ${field.id}`} />
                  </label>))}
              </div>
        </div>
            <div className='flex flex-col items-center pt-10 mx-2'>
                <MdAdd className='my-2 cursor-pointer' size={40} />
                <FaRegCopy className="my-2 cursor-pointer" size={25}/>
                <RiDeleteBin5Line className='my-2 cursor-pointer ' size={25} />
            </div>
    </div>
  )
}

export default QuestionCate2
