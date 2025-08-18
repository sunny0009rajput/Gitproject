import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';
import Payment from '../models/Payment.js';
dotenv.config();

const router = express.Router();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});

// create order
router.post('/create-order', async (req, res) => {
    const { amount} = req.body;

    try {
        const options = {
            amount: amount * 100, // amount in smallest currency unit
            currency: 'INR',
            receipt: crypto.randomBytes(10).toString('hex')
        };
        const order = await razorpay.orders.create(options);
        res.status(200).json({message : 'Order created successfully', order});
        
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});

// verify payment
router.post('/verify-payment', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const order = await razorpay.orders.fetch(razorpay_order_id);

   try {
        const generated_signature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET_KEY)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest('hex');

        const isAuthenticated = generated_signature === razorpay_signature;
        if (isAuthenticated) {
            const paymentDetails = new Payment({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
                amount: order.amount / 100, // convert to original amount
                currency: "INR",
                status: 'completed'
            });
            try{
            await paymentDetails.save();
            console.log('Payment details saved successfully');
            res.status(200).json({ message: 'Payment verified successfully', isAuthenticated });
        }catch (error) {
            console.error('Error saving payment details:', error);
            res.status(500).json({ error: 'Failed to save payment details' });
        }
        }else {
        console.error('Payment verification failed:', error);
        res.status(500).json({ error: 'Payment verification failed' });
    }
    
        
    }catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({ error: 'Failed to verify payment' });
    }
});

export default router;
