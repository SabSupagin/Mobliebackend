const express = require('express')
const TestRoute = express.Router();

// Model
const TestModel = require('../models/Models');
const UserModel = require('../models/user');
const HistoryModel = require('../models/history');

// GET DATA
TestRoute.route('/show-stock').get((req,res,next)=>{
    TestModel.find((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// GET HISTORY
TestRoute.route('/show-history').get((req,res,next)=>{
    HistoryModel.find((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// GET USER
TestRoute.route('/show-user').get((req,res,next)=>{
    UserModel.find((error,data)=>{
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

// CREATE USER
TestRoute.route('/create-user').post((req,res,next)=>{
    UserModel.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// CREATE HISTORY
TestRoute.route('/create-history').post((req,res,next)=>{
    HistoryModel.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// EDIT PRODUCT
TestRoute.route('/edit-product/:id').get((req, res, next) => {
    TestModel.findById(req.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// UPDATE PRODUCT
TestRoute.route('/update-product/:id').put((req, res, next) => {
    TestModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },(error, data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Success!!');
        }
    })
})

module.exports = TestRoute;