import React, { useContext } from 'react'
import { CiImageOn } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import context from '../context/context';


const QuestionCat1 = () => {
    const { inputsCategory,inputsAns,handleInputChangeCategory,handleInputChangeAns,handleDeleteCategory,handleDeleteAnswer} = useContext(context);
    const drowdownName = [
        { id: 1, name: 'cate1' },
        { id: 2, name: 'cate2' },
        { id: 3, name: 'cate3' },
        { id: 4, name: 'cate4' },
        { id: 5, name: 'cate5' },
    ]
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
          <div className='bg-slate-50 my-4'>
              <h4 className='text-md font-serif mx-10'>Categories</h4>
              <div className='flex flex-col mx-10 my-1'>
                  {
                            inputsCategory.map((cate) => (
                                <label htmlFor="cat1" key={cate.id} className='flex items-center'>
                                    <input type="text" value={cate.value} onChange={(e) => handleInputChangeCategory(cate.id, e.target.value)}
                                        className='bg-white md:w-[30%] w-full  border-[1px] border-[#333] rounded outline-none px-2 py-1 my-2 mx-1' name="cat1" id="" placeholder={`category ${cate.id + 1}`} />
                                    <IoIosClose onClick={() => { handleDeleteCategory(cate.id) }} className={`cursor-pointer ${cate.id === 1 ? 'hidden':""} `} size={30} />
                                </label>
                       ))     
                  }
              </div>
          </div>
          <div className='flex md:flex-row flex-col my-4'>
              <div className=''>
                  <h4 className='mx-11'>item</h4>
                  <div className='flex flex-col mx-10'>
                      {
                               inputsAns.map((ans) => (
                                    <label htmlFor="cat1" key={ans.AnsId} className='flex items-center'>
                                            <input type="text" value={ans.AnsValue} onChange={(e) => handleInputChangeAns(ans.AnsId, e.target.value)}
                                            className='bg-white w-full border-[1px] border-[#333] rounded outline-none px-2 py-1 my-2 mx-1' name="cat1" id="" placeholder={`ans ${ans.AnsId + 1}`} />
                                       <IoIosClose onClick={() => { handleDeleteAnswer(ans.AnsId) }} className={`cursor-pointer ${ans.AnsId === 1 ? 'hidden':""} `} size={30} />
                                    </label>
                          ))      
                                
                      }      
                </div>
              </div>
              <div>
                  <h4 className='mx-11'>belongs To</h4>
                   <div className='flex flex-col mx-10'>
                        <select name="cate"  className='text-gry-900 cursor-pointer w-[200px] border-[1px] border-[#333] rounded outline-none px-2 py-1 my-2 mx-1' id="cate">
                                {
                                    drowdownName.map(({ id, name })=>(
                                        <option  key={id} value={id}>{name}</option>
                                    ))
                                }
                        </select>     
                            <select name="cate" className='text-gray-900 cursor-pointer w-[200px] border-[1px] border-[#333] rounded outline-none px-2 py-1 my-2 mx-1' id="cate">
                                {
                                    drowdownName.map(({ id, name })=>(
                                        <option  className='' key={id} value={id}>{name}</option>
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
  )
}

export default QuestionCat1
