import React, { useContext, useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import context from '../context/context';
import { FaPen } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdAddToPhotos } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";

const QuestionCat1 = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActives, setIsActives] = useState(false);
  const [category, setCategory] = useState("");
  const [cateId, setCateId] = useState("");
  const [answerItem, setAnswerItem] = useState("");
  const [ansId, setAnsId] = useState("");
  const {
    noteCategory,
    addCategory,
    updateCategory,
    deleteCategory,
    noteAnswer,
    addAnswer,
    updateAnswerNote,
    deleteAnswer,
    handleDragEnd,
    handleDragEndAns,
  } = useContext(context);

  // Start Category Question Crud
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (category === "") {
      alert("Your category is blank. You cannot be add a category");
    } else {
      addCategory(category);
      // alert('Your category is added');
    }
    setCategory("");
  };

  const handleEditCategory = (cate) => {
    setCateId(cate.id);
    setCategory(cate.category);
  };

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    updateCategory(cateId, category);
    setCateId(null);
    setIsActive(false);
    setCategory("");
  };
  //  End Category Question Crud

  // Start Answer Item Crud
  const handleAddAsnwer = (e) => {
    e.preventDefault();
    if (answerItem === "") {
      alert("Your answer is blank. You cannot be add an answer");
    } else {
      addAnswer(answerItem);
    }
    setAnswerItem("");
  };

  const handleEditAnswer = (ans) => {
    setAnsId(ans.id);
    setAnswerItem(ans.answer);
  };

  const handleUpdateAnswer = (e) => {
    e.preventDefault();
    updateAnswerNote(ansId, answerItem);
    setAnsId(null);
    setIsActives(false);
    setAnswerItem("");
  };
  //  End Category Question Crud

  return (
    <div className='flex md:mx-20 mx-8 border-l-8 border-sky-400'>
    <div className='shadow-sm w-[100%] bg-slate-50 pt-24 bt-10'>
          <div className='shadow-sm border-b-2 border-gray-600 flex mx-10 justify-between py-4'>
              <p className='text-xl cursor-pointer mx-4'>Untitle Quiz</p>
              <div className='flex md:flex-row flex-col'>
                  <button className='bg-sky-500 cursor-pointer border-[1px] text-white border-sky-800 outline-none px-2 py-1 hover:bg-sky-700 rounded mx-2 my-1 md:my-0 '>Save</button>
                  <button className='text-sky-500 cursor-pointer  border-[1px] border-sky-800 outline-none px-2 py-1 hover:bg-sky-500 hover:text-white rounded mx-2 my-1 md:my-0'>Save & Proceed</button>
              </div> 
          </div>
          <div className='mx-10 my-4'>
              <div>
                  <label htmlFor="question" className='mx-2'>Question 1</label>
                  <div className='flex items-center'>
                  <input type="text" className='bg-white w-[60%] border-[1px] border-[#333] rounded outline-none px-2 py-1 mx-2 my-2' id='question' name='question1' placeholder='Description (Optional)' />
                    <label htmlFor="img"> <input type="file" className='hidden' name="txt,png,pdf,jpn" id="img" /> <CiImageOn className='cursor-pointer ' id='img' size={25}/></label>
                  </div> 
              </div>
          </div>
              <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="droppable">
                      {(provided) => (
                          <div {...provided.droppableProps}
                               ref={provided.innerRef}
                              className='bg-slate-50 min-h-[220px] my-4'>
                              <h4 className='text-md font-serif mx-10'>Categories</h4>
                              <div className='flex flex-col mx-10 my-1'>
                                  <label htmlFor="cat1" className='flex items-center'>
                                      <input type="text" value={category} onChange={(e) => (setCategory(e.target.value))}
                                          className='bg-white md:w-[30%] w-full  border-[1px] border-[#333] rounded outline-none px-2 py-1 my-2 mx-1' name="cat1" id="" placeholder={`Enter Category`} />
                                      {isActive ? <MdFileDownloadDone onClick={handleUpdateCategory} className=' cursor-pointer ' size={25} />
                                          : <MdAddToPhotos onClick={handleAddCategory} className=' cursor-pointer ' size={25} />}
                            
                                  </label>
                
                              </div> {noteCategory.map((cate, index) =>
                              (<Draggable key={cate.id} draggableId={cate.id} index={index}>
                                  {(provided) => (
                                      <div ref={provided.innerRef} 
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                          className='mx-11 my-2 flex items-center justify-between rounded px-2 py-1 border-[1px] border-gray-900  w-[20%]'>
                                      <h4 className='mr-1 text-xl font-serif'>{cate.category}</h4>
                                      <span className='ml-1 flex items-center cursor-pointer'>
                                      <FaPen onClick={() => { handleEditCategory(cate), setIsActive(true) }} className='mx-1' />
                                      <RiDeleteBinLine onClick={() => { deleteCategory(cate.id) }} size={25} className='mx-1' />
                                      </span></div>)}
                              </Draggable>
                              ))}
                          </div>
                      )}
                  </Droppable>
            </DragDropContext>    
          <div className='flex md:flex-row flex-col my-4'>
              <div className=''>
                  <h4 className='mx-11'>item</h4>
                  <div className='flex flex-col mx-10'>
                        <label htmlFor="cat1" className='flex items-center'>
                         <input type="text"   value={answerItem} onChange={(e)=>{setAnswerItem(e.target.value)}}
                          className='bg-white w-full border-[1px] border-[#333] rounded outline-none px-2 py-1 my-2 mx-1' name="cat1" id="" placeholder={`answer`} />
                           {isActives ?<MdFileDownloadDone onClick={handleUpdateAnswer} className=' cursor-pointer ' size={25} />
                                : <MdAddToPhotos onClick={handleAddAsnwer} className=' cursor-pointer ' size={25} />}
                            
                          </label>
                
                       { noteAnswer.map((ans) =>
                    (<div key={ans.id} className='mx-1 my-2 shadow-sm bg-white  flex items-start justify-between rounded px-2 py-1 border-[1px] border-gray-900 w-full max-w-[300px]'>
                        <h4 className='mr-1 my-1 font-serif'>{ans.answer}</h4>
                        <span className='ml-1 flex items-center cursor-pointer'>
                               <FaPen onClick={() => { handleEditAnswer(ans), setIsActives(true) }} className={`mx-1 my-1`} />
                               <RiDeleteBinLine onClick={() => { deleteAnswer(ans.id) }} size={25} className={`mx-1 my-1`} />
                    </span></div>))}     
                </div>
              </div>
              <div>
                  <h4 className='mx-11'>belongs To</h4>
                   <div className='flex flex-col mx-10'>
                        <select name="cate"  className='text-gry-900 cursor-pointer w-[200px] border-[1px] border-[#333] rounded outline-none px-2 py-1 my-2 mx-1' id="cate">
                                {
                                   noteCategory.map((cate)=>(
                                        <option key={cate.category} value={cate.category}>{cate.category}</option>
                                    ))
                                }
                        </select>     
                            <select name="cate" className='text-gray-900 cursor-pointer w-[200px] border-[1px] border-[#333] rounded outline-none px-2 py-1 my-2 mx-1' id="cate">
                                {
                                    noteCategory.map((cate)=>(
                                        <option  className='' key={cate.id} value={cate.id}>{cate.category}</option>
                                    ))
                                }
                            </select>     
                    </div>
              </div>
          </div>
        </div>
            <div className='flex flex-col items-center pt-24 mx-2'>
                <MdAdd className='my-2 cursor-pointer' size={40} />
                <FaRegCopy className="my-2 cursor-pointer" size={25}/>
                <RiDeleteBin5Line className='my-2 cursor-pointer ' size={25} />
            </div>
    </div>
  );
};

export default QuestionCat1;
