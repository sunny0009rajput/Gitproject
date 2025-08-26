const express = require('express');
const router = express.Router();
const { auth, requireAdmin } = require('../middleware/auth');


const CartModel = require('../models/Cart');

// Create a new cart



router.post('/carts', async (req, res) => {
    try {
        const cart = new CartModel(req.body);
        await cart.save();
        res.status(201).send(cart);
    } catch (error) {
        res.status(400).send(error);
    }   
});

router.get('/carts',auth,requireAdmin, async (req, res) => {
    try {
        const carts = await CartModel.find();
        res.status(200).send(carts);
    } catch (error) {
        res.status(500).send(error);
    }
}
);
router.get('/carts/:id', async (req, res) => {
    try {
        const cart = await CartModel.findById(req.params.id);
        if (!cart) {
            return res.status(404).send();
        }
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/carts/:id',auth, async (req, res) => {
    try {
        const cart = await CartModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!cart) {
            return res.status(404).send();
        }
        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/carts/:id',auth, async (req, res) => {
    try {
        const cart = await CartModel.findByIdAndDelete(req.params.id);
        if (!cart) {
            return res.status(404).send();
        }
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;