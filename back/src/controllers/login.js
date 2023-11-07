const express = require('express');


const users = require('../utils/users.js')

const login=(req,res)=>{
    const {email, password}= req.query;

    const user= users.find((user)=>(user.email===email && user.password===password))
    if (user){
        return res.status(200).json({access:true})
    }else{
        return res.status(200).json({access:false})
    }
}
//Probar sin return

module.exports={
    login
}