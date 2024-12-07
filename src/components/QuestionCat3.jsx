import React, { useContext, useEffect, useState } from 'react'
import video from "../assets/custom-video.mp4";
import context from '../context/context';

const QuestionCat3 = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    // const { notes,setNotes,addCate}= useContext(context)
    // const [questions, setQuestions] = useState('');
    // const [categ, setCate] = useState('');
    // // const [ans, setAns] = useState('');
    // const [eId, setEid] = useState('');

    // useEffect(() => {
    //     setNotes();
    // }, []);

    // const handleQAadd = (e) => {
    //     e.preventDefault();
    //     addCate(categ);
    // }
    // console.log(notes);
  return (
      <div className='bg-slate-200 pt-24 pb-10'>
          <h4 className='text-2xl font-serif text-center'>Item List</h4>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => setIsVideoOpen(true)}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Open Video
      </button>

      {isVideoOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative bg-white rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing on video click
          >
            <video
              controls
              className="rounded"
              src={video} // Replace with your video URL
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
          </div>
          
          <div>
              {/* <div className='bg-slate-100 bt-10 my-10 pt-10 flex  justify-center items-center'>
                  <form action="" className='shadow-md bg-slate-300 rounded px-5 py-4 flex flex-col items-center'>
                  <h4 className='text-2xl font-serif text-center'>Form Q&A</h4>
                      <input type="text" value={categ} onChange={(e)=>{setCate(e.target.value)}} className='outline-none border-[1px] border-gray-900 rounded px-3 py-1 mx-2 my-3 shadow' name="category" placeholder='Enter Your Category' id="" />
                      <button type="submit" onClick={handleQAadd} className='border-[1px]  border-gray-900 rounded w-[94%] py-1 shadow bg-slate-50 text-xl font-serif outline-none'>Save Form</button>
                  </form>
              </div>
              <div className='bg-slate-100 pt-10 my-10 '>
                  <div className='flex justify-center border-[1px] border-gray-900 rounded py-20 my-1'>
                      {
                         notes && notes.map((cate) => {
                              return (
                                <div key={cate._id} className='shadow-md bg-gray-400 px-4 py-3 rounded'>
                                    <h4 className='text-xl font-serif text-sky-900 '>{cate.category}</h4>
                                </div>
                              )
                          })
                      }
                  </div>
              </div> */}
          </div>
          
    </div>
  )
}

export default QuestionCat3
