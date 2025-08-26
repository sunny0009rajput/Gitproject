const express = require('express');
const router = express.Router();
const { auth, requireAdmin } = require('../middleware/auth');


const WishlistModel = require('../models/Wishlist');

// Create a new wishlist



router.post('/wishlists', async (req, res) => {
    try {
        const wishlist = new WishlistModel(req.body);
        await wishlist.save();
        res.status(201).send(wishlist);
    } catch (error) {
        res.status(400).send(error);
    }   
});

router.get('/wishlists',auth,requireAdmin, async (req, res) => {
    try {
        const wishlists = await WishlistModel.find();
        res.status(200).send(wishlists);
    } catch (error) {
        res.status(500).send(error);
    }
}
);
router.get('/wishlists/:id', async (req, res) => {
    try {
        const wishlist = await WishlistModel.findById(req.params.id);
        if (!wishlist) {
            return res.status(404).send();
        }
        res.status(200).send(wishlist);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/wishlists/:id',auth, async (req, res) => {
    try {
        const wishlist = await WishlistModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!wishlist) {
            return res.status(404).send();
        }
        res.status(200).send(wishlist);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/wishlists/:id',auth, async (req, res) => {
    try {
        const wishlist = await WishlistModel.findByIdAndDelete(req.params.id);
        if (!wishlist) {
            return res.status(404).send();
        }
        res.status(200).send(wishlist);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;