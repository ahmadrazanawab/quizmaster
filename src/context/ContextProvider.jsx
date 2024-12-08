import React, { useState } from 'react'
import Context from './context'
const contextProvider = ({ children }) => {
    const [noteCategory, setNoteCategory] = useState([]);
    const [noteAnswer, setNoteAnswer] = useState([]);

    const host = "http://localhost:8000";
    // const host = "https://ahmad-raza-quizmaster.onrender.com"
  
    // get all category
    const getallcategory = async () => {
        const response = await fetch(`${host}/api/c1/getallcategory`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
          }  
        })
        const json = await response.json();
        setNoteCategory(json);
        // console.log(json);
    }
    
    //start category crud function

    // add Category
    const addCategory =async (category) => {
            const response = await fetch(`${host}/api/c1/category`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ category })
            });
            const cateAdd = await response.json();
            // setNoteCategory([...noteCategory, cateAdd]);
            setNoteCategory((prevCategory) => [...prevCategory, cateAdd]);
    }
   


    // delete category
    const deleteCategory =async (id) => {
        const response = await fetch(`${host}/api/c1/deletecategory/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const newCategory = noteCategory.filter((cate) => { return cate._id !== id });
        setNoteCategory(newCategory);
        // const deleteCategory = noteCategory.filter((cate) => { return cate._id !== id });
        // setNoteCategory(deleteCategory);
        // console.log(deleteCategory);
    }

    // update category
    const updateCategory = async (id,category) => {
        const response = await fetch(`${host}/api/c1/updatecategory/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({category})
        })
        const cate = await response.json();
        // console.log(cate);
        setNoteCategory(noteCategory.map(cate => (cate._id === id ? { ...cate, category } : cate)))
    }

    // End category crud function



    //start Answer Note crud function

    // get all answer
    const getallanswer = async () => {
        const response = await fetch(`${host}/api/a1/getallanswer`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
          }  
        })
        const json = await response.json();
        setNoteAnswer(json);
        // console.log(json);
    }

    // add Answer note
    const addAnswer = async(answer) => {
        // const addAns = {
        //     id: uuidv4(),
        //     answer,
        // }
        // setNoteAnswer([...noteAnswer, addAns ]);
        // console.log(addAns);
        const response = await fetch(`${host}/api/a1/createanswer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ answer })
        });

            const addAns = await response.json();
            // setNoteCategory([...noteCategory, cateAdd]);
            setNoteAnswer((prevCategory) => [...prevCategory, addAns]);
            // console.log(addAns);
    }

    // delete answer note
    const deleteAnswer = async (id) => {
        // const deleteAnswer = noteAnswer.filter((ans) => {return ans.id !== id });
        // setNoteAnswer(deleteAnswer);
        // console.log(deleteAnswer);

        const response = await fetch(`${host}/api/a1/deleteanswer/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const deleteAnswer = noteAnswer.filter((ans) => {return ans._id !== id });
        setNoteAnswer(deleteAnswer);
        // console.log(deleteAnswer);
    }

    // update answer note
    const updateAnswerNote =async (id,answer) => {
        const response = await fetch(`${host}/api/a1/updateanswer/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({answer})
        })
        const ans = await response.json();
        // console.log(ans);
        setNoteAnswer(noteAnswer.map(ans => (ans._id === id ? { ...ans, answer } : ans)))
    }

    //End Answer Note crud function

    // Add Category Drag Item
    const handleDragEnd = (result) => {
        const { source, destination } = result;
    
        if (!destination) return; 
    
        const reorderedItems = Array.from(noteCategory);
        const [removed] = reorderedItems.splice(source.index, 1);
        reorderedItems.splice(destination.index, 0, removed);
    
        setNoteCategory(reorderedItems);
    };
    
    // End Category Drag Item

    // Add Answer Item Drag Item
    const handleDragEndAns = (result) => {
        const { source, destination } = result;
    
        if (!destination) return; 
    
        const reorderedItems = Array.from(noteAnswer);
        const [removed] = reorderedItems.splice(source.index, 1);
        reorderedItems.splice(destination.index, 0, removed);
    
        setNoteAnswer(reorderedItems);
    };
    
    // End Answer Item Drag Item

  return (
    <Context.Provider value={{noteCategory,getallcategory,updateCategory,addCategory,deleteCategory,noteAnswer,getallanswer,addAnswer,updateAnswerNote,deleteAnswer,handleDragEnd,handleDragEndAns}}>
      {children}
    </Context.Provider>
  )
}

export default contextProvider
