const express=require('express')
const Router=express.Router()

console.log("i m in")
Router.use('/api',require('./api/index'));

module.exports=Router
