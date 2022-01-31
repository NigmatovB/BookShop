const express = require('express')
let router = express.Router()
const db = require('../schema/bookSchema')
const upload = require('../middleware/uploadImage')

router.get( '/', async ( req, res ) => {
    try{
        let book = await db.find({})
        res.json( book )
    } catch ( error ){
        res.send(error)
    }
})

router.post( '/', upload.single('image'), async ( req, res ) => {
    try{
        let book = await db.create({
            title : req.body.title,
            pages: req.body.pages,
            year: req.body.year,
            price: req.body.price,
            country: req.body.country,
            author: req.body.author,
            description: req.body.description,
            image: req.file.filename
        })
        res.json('Successfully loaded')
    } catch( error ){
        res.send( error )
    }
})

router.put( '/', upload.single('image'), async ( req, res ) => {
    try{
        let book = await db.findOneAndUpdate(
            { _id: req.body._id },
        {
            title : req.body.title,
            pages: req.body.pages,
            year: req.body.year,
            price: req.body.price,
            country: req.body.country,
            author: req.body.author,
            description: req.body.description,
            image: req.file.filename
        },({new : true}))
        res.json('Successfully replaced')
    } catch( error ){
        res.send( error )
    }
})

router.delete( '/', async ( req, res ) => {
    try{
        let book = await db.findOneAndDelete({ _id : req.body._id })
        res.send("Successfully deleted") 
    } catch( error ){
        res.send( error )
    }
})

module.exports = router