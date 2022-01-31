const express = require('express')
let router = express.Router()
const db = require('../schema/authorSchema')
const upload = require('../middleware/uploadImage')

router.get( '/', async ( req, res ) => {
    try{
        let author = await db.find({})
        res.json( author )
    } catch ( error ){
        res.send(error)
    }
})

router.post( '/', upload.single('image'), async ( req, res ) => {
    try{
        let author = await db.create({
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            birthData: req.body.birthData,
            deathData: req.body.deathData,
            cauntry: req.body.cauntry,
            bio: req.body.bio,
            image: req.file.filename
        })
        res.json('Successfully loaded')
    } catch( error ){
        res.send( error )
    }
})

router.put( '/', upload.single('image'), async ( req, res ) => {
    try{
        let author = await db.findOneAndUpdate(
            { _id: req.body._id },
        {
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            birthData: req.body.birthData,
            deathData: req.body.deathData,
            cauntry: req.body.cauntry,
            bio: req.body.bio,
            image: req.file.filename
        },({new : true}))
        res.json('Successfully replaced')
    } catch( error ){
        res.send( error )
    }
})

router.delete( '/', async ( req, res ) => {
    try{
        let author = await db.findOneAndDelete({ _id: req.body._id })
        res.send("Successfully deleted")
    } catch( error ){
        res.send( error )
    }
})

module.exports = router