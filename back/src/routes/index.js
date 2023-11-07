const express = require('express');
const router= require('express').Router()

const {postFav,deleteFavs}= require('../controllers/handleFavorites');
const {login}= require('../controllers/login');
const {getCharById}= require('../controllers/getCharById');



router.get("/login",login)
router.get("/character/:id",getCharById)
router.post("/fav",postFav)
router.delete("/fav/:id",deleteFavs)


module.exports= router;