const express = require('express');
const route = express.Router();
const Queston1 = require('../model/questionCate.model');
const { body, validationResult } = require('express-validator');



// Question route
route.post('/question1', [
    body('question', 'Enter your Qeustion').isLength({min:3}),
    body('category', 'Enter your Category').isLength({min:2}),
],async (req, res) => {
    try {
        let success = false
        let result = validationResult(req);
        if (!result.isEmpty()) {
           return res.status(400).json({ success,result: result.array() })
        }
        let { question, category} = req.body;
        
         contactQuestion = await Queston1.create({
            question,
            category,
        });

        const saveQeustion1 = await  contactQuestion.save()
        res.json({ success:true,saveQeustion1 });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = route;