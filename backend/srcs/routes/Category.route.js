const express = require('express');
const cate = express.Router();
const Category = require('../model/Category.model');
const { body, validationResult } = require('express-validator');
const Category1 = require('../model/Category.model');




cate.post('/category', [
    body('category', 'Enter your Category').isLength({min:1}),
],async (req, res) => {
    try {
        let success = false
        let result = validationResult(req);
        if (!result.isEmpty()) {
           return res.status(400).json({ success,result: result.array() })
        }
        let {category} = req.body;
        
         contactQuestion = await Category.create({
            category,
        });

        const saveQeustion1 = await  contactQuestion.save()
        res.json({ success:true,saveQeustion1 });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// update Category
cate.put('/updatecategory/:id', async (req, res) => {
    try {
        let conn = await connetedToMongodb();
        const { category } = req.body;
        console.log(category);
      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        { category },
        { new: true }
      );
      if (!updatedCategory) return res.status(404).json({ error: 'Category name not found' });
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// delete category item
cate.delete('/deletecategory/:id', async (req, res) => {
    try {
      const deletedCategory = await Category.findByIdAndDelete(req.params.id);
      if (!deletedCategory) return res.status(404).json({ error: 'Category not found' });
      res.status(200).json({ message: 'Category item deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
 



// get all category 
cate.get('/getallcategory', async (req, res) => {
    try {
      const category = await Category1.find();
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = cate;