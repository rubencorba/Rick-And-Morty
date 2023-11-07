const express = require('express');



let myFavorites = [];

const postFav=(req,res)=>{
    const character=req.body;
    myFavorites.push(character);
    return res.status(200).json(myFavorites)
}

const deleteFavs= (req,res)=>{
    const {id} =req.params;
    myFavorites= myFavorites.filter((char)=>char.id!==Number(id));
    return res.json(myFavorites)
}

module.exports= {
    postFav,
    deleteFavs
}