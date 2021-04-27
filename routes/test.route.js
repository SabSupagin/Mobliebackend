const express = require('express')
const TestRoute = express.Router();

// Model
const TestModel = require('../models/Models');

// GET DATA
TestRoute.route('/').get((req,res,next)=>{
    TestModel.find((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// CREATE 
TestRoute.route('/create').post((req,res,next)=>{
    TestModel.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// CREATE PRODUCT
TestRoute.route('/create-product').post((req,res,next)=>{
    TestModel.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// DELETE PRODUCT
TestRoute.route('/delete-product/:id').delete((req,res,next)=>{
    TestModel.findByIdAndDelete(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = TestRoute;