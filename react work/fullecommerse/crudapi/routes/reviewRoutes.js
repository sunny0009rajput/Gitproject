const express = require('express');
const router = express.Router();
const { auth, requireAdmin } = require('../middleware/auth');


const ReviewModel = require('../models/Review');

// Create a new review



router.post('/reviews', async (req, res) => {
    try {
        const review = new ReviewModel(req.body);
        await review.save();
        res.status(201).send(review);
    } catch (error) {
        res.status(400).send(error);
    }   
});

router.get('/reviews',auth,requireAdmin, async (req, res) => {
    try {
        const reviews = await ReviewModel.find();
        res.status(200).send(reviews);
    } catch (error) {
        res.status(500).send(error);
    }
}
);
router.get('/reviews/:id', async (req, res) => {
    try {
        const review = await ReviewModel.findById(req.params.id);
        if (!review) {
            return res.status(404).send();
        }
        res.status(200).send(review);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/reviews/:id',auth, async (req, res) => {
    try {
        const review = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!review) {
            return res.status(404).send();
        }
        res.status(200).send(review);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/reviews/:id',auth, async (req, res) => {
    try {
        const review = await ReviewModel.findByIdAndDelete(req.params.id);
        if (!review) {
            return res.status(404).send();
        }
        res.status(200).send(review);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;