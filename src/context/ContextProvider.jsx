import React, { useState } from 'react'
import Context from './context'
import { v4 as uuidv4 } from 'uuid';
const contextProvider = ({ children }) => {
    const [noteCategory, setNoteCategory] = useState([]);
    const [noteAnswer, setNoteAnswer] = useState([]);

    //start category crud function
    // add Category
    const addCategory = (category) => {
        const addCate = {
            id: uuidv4(),
            category,
        }
        setNoteCategory([...noteCategory, addCate]);
        console.log(addCate);
    }

    // delete category
    const deleteCategory = (id) => {
        const deleteCategory = noteCategory.filter((cate) => {return cate.id !== id });
        setNoteCategory(deleteCategory);
        console.log(deleteCategory);
    }

    // update category
    const updateCategory = (id,category) => {
        setNoteCategory(noteCategory.map(cate => (cate.id === id ? { ...cate, category } : cate)))
    }

    // End category crud function



    //start Answer Note crud function

    // add Answer note
    const addAnswer = (answer) => {
        const addAns = {
            id: uuidv4(),
            answer,
        }
        setNoteAnswer([...noteAnswer, addAns ]);
        console.log(addAns);
    }

    // delete answer note
    const deleteAnswer = (id) => {
        const deleteAnswer = noteAnswer.filter((ans) => {return ans.id !== id });
        setNoteAnswer(deleteAnswer);
        console.log(deleteAnswer);
    }

    // update answer note
    const updateAnswerNote = (id,answer) => {
        setNoteAnswer(noteAnswer.map(ans => (ans.id === id ? { ...ans, answer } : ans)))
    }

    //End Answer Note crud function

  return (
    <Context.Provider value={{noteCategory,updateCategory,addCategory,deleteCategory,noteAnswer,addAnswer,updateAnswerNote,deleteAnswer}}>
      {children}
    </Context.Provider>
  )
}

export default contextProvider
