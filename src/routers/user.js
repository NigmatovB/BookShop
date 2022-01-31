const express = require('express')
let router = express.Router()
const db = require('../schema/userSchema')
const upload = require('../middleware/uploadImage')

router.get( '/', async ( req, res ) => {
    try{
        let user = await db.find({})
        res.json( user )
    } catch ( error ){
        res.send(error)
    }
})

router.post( '/', upload.single('image'), async ( req, res ) => {
    try{
        let user = await db.create({
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            image: req.file.filename
        })
        res.json('Successfully loaded')
    } catch( error ){
        res.send( error )
    }
})

router.put( '/', upload.single('image'), async ( req, res ) => {
    try{
        let user = await db.findOneAndUpdate(
            { _id: req.body._id },
        {
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            image: req.file.filename
        },({new : true}))
        res.json('Successfully replaced')
    } catch( error ){
        res.send( error )
    }
})

router.delete( '/', async ( req, res ) => {
    try{
        let user = await db.findOneAndDelete({ _id: req.body._id })
        res.send("Successfully deleted")
    } catch( error ){
        res.send( error )
    }
})

module.exports = router