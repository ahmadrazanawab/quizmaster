import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { GrChapterAdd } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import video from "../assets/page1Video.mp4";

const QuestionCat3 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className='flex md:mx-20 mx-8 border-l-8 my-10  border-sky-400'>
    <div className='shadow-sm w-[100%] bg-slate-50 pt-4 pb-14'>
          <div className='flex mx-12 justify-between py-4'>
              <p className='text-xl cursor-pointer'>Question 3</p>
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
                          {isVideoOpen && (
                                <div
                                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                                  onClick={() => setIsVideoOpen(false)}
                                >
                                  <div
                                    className="relative bg-white rounded shadow-lg"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <video
                                      controls
                                      className="rounded w-[400px] h-[250px]"
                                      src={video} 
                                    />
                                    <button
                                      onClick={() => setIsVideoOpen(false)}
                                      className="absolute top-0 right-0 m-2 text-white bg-red-500 rounded-full hover:bg-red-600 px-3 py-1"
                                    >
                                      X
                                    </button>
                                  </div>
                                </div>
                                )}
                              <label htmlFor="cloz" className='flex items-center'>Categorize <span className='mx-2'><BsQuestionCircle onClick={() => setIsVideoOpen(true)} className='text-green-600 cursor-pointer' size={20} /></span></label> 
                              <label htmlFor="point" className='flex flex-col mt-4'><span className='text-sm'>Points</span><input type="text" className='shadow-sm outline-none w-28 h-10 rounded px-2 py-4 my-1' name="marks" id="point" /></label>
                        </div>
                      
                </div> 
              </div>
            </div>
            <div className='mx-10 my-1'>
              <div>
                  <label htmlFor="question2" className='mx-2'>Sentance <span className='text-red-500'>*</span></label>
                  <div className=''>
                          <textarea 
                              name="question2" id="textInput" rows="2" cols="10" className='mx-2 w-[300px]   outline-none shadow-sm rounded px-2 py-1' placeholder='A quick brown fox jumped over a fence'>
                          </textarea>
                          <label htmlFor="addfield" className='flex ml-5 w-[300px] cursor-pointer items-center justify-between   my-2 mx-2 border-[1px] border-gray-900 rounded px-2 py-1'>
                              <h4 id='addfield'>Add Question</h4><span><GrChapterAdd id='addfield' size={20} /></span>
                          </label>
                  </div> 
              </div>
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

export default QuestionCat3

