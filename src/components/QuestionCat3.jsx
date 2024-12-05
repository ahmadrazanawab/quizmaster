import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

const QuestionCat3 = () => {
    const itemList = [
        {
            id:1,
            title: 'this is title one',
            description:"this is description one"
        },
        {
            id:2,
            title: 'this is title one',
            description:"this is description one"
        },
        {
            id:3,
            title: 'this is title one',
            description:"this is description one"
        },
        {
            id:4,
            title: 'this is title one',
            description:"this is description one"
        },
        {
            id:5,
            title: 'this is title one',
            description:"this is description one"
        },
        
    ]
  return (
      <div className='bg-slate-200 pt-24 pb-10'>
          <h4 className='text-2xl font-serif text-center'>Item List</h4>
          <DragDropContext>
          <div className='flex justify-center flex-col items-center'>
              {
                  itemList.map((item) => (
                    <div key={item.id} className='flex flex-col my-2 cursor-pointer rounded items-center border-[1px] border-gray-900'>
                          <h4 className='text-xl my-1 mx-1'>{item.title}</h4>
                          <p className='text-md my-1 mx-1'>{item.description}</p>
                   </div>))
              }
              </div>
          </DragDropContext>
    </div>
  )
}

export default QuestionCat3
