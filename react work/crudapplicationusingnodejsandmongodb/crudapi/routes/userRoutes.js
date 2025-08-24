const express = require('express');
const router = express.Router();
const { auth, requireAdmin } = require('../middleware/auth');


const UserModel = require('../models/Users');

// Create a new user



router.post('/users', async (req, res) => {
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }   
});

router.get('/users',auth,requireAdmin, async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}
);
router.get('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/users/:id',auth, async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/users/:id',auth, async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;