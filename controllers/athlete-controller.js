const express = require('express');
const router = express.Router();
const {Athlete} = require('../models')

// ROUTES

// PEOPLE INDEX ROUTE
router.get("/", async (req, res) => {
	try {
    // get all Athlete
    res.json(await Athlete.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) => {
  try {
    // create new Athlete
    res.json(await Athlete.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        // send one person
        res.json(await Athlete.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});

router.put('/:id', async (req, res) => {
    try {
        res.json(await Athlete.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch(error) {
        res.status(400).json(error)
    }
});

router.delete('/:id', async (req, res) => {
    res.jason(await Athlete.findByIdAndRemove(req.params.id));
})

module.exports = router;