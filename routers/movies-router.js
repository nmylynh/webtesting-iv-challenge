const express = require('express');
const moviesDB = require('../models/movies-model')
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const movies = await moviesDB.find();

        res.status(200).json(movies);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});


router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const movie = await moviesDB.findById(id);

        res.status(200).json(movie);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
}); 

router.post('/', async (req, res) => {
    try {
        const newMovie = await moviesDB.add(req.body);

        res.status(201).json(newMovie);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const updateMovie = await moviesDB.update(id, req.body);

        updateMovie
        ? res.status(200).json({ message: 'successfully updated movie' })
        : res.status(404).json({ message: 'movie not found'})
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const success = await moviesDB.remove(id);

        success ?
         res.status(204).end() : res.status(404).end();
    }  catch(err) {
         res.status(500).json({success: false, err});
    }
});



module.exports = router;