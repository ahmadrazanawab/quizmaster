const express = require('express');
const ans = express.Router();
const Answer1 = require('../model/Answer.model');
const { body, validationResult } = require('express-validator');



ans.post('/createanswer', [
    body('answer', 'Enter your answer').isLength({min:1}),
],async (req, res) => {
    try {
        let success = false
        let result = validationResult(req);
        if (!result.isEmpty()) {
           return res.status(400).json({ success,result: result.array() })
        }
        let {answer} = req.body;
        
         AnswerItem = await Answer1.create({
            answer,
        });

        const saveAnswer = await  AnswerItem.save()
        res.json({ success:true,saveAnswer });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// update Answer Item
ans.put('/updateanswer/:id', async (req, res) => {
    try {
        const { answer } = req.body;
      const updatedAnswer = await Answer1.findByIdAndUpdate(
        req.params.id,
        { answer },
        { new: true }
      );
      if (!updatedAnswer) return res.status(404).json({ error: 'Answer item not found' });
      res.status(200).json(updatedAnswer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// delete Answer item
ans.delete('/deleteanswer/:id', async (req, res) => {
    try {
      const deletedAnswer = await Answer1.findByIdAndDelete(req.params.id);
      if (!deletedAnswer) return res.status(404).json({ error: 'Answer item not found' });
      res.status(200).json({ message: 'Answer item deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
 
// get all answer
ans.get('/getallanswer', async (req, res) => {
    try {
      const answer = await Answer1.find();
      res.status(200).json(answer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = ans;