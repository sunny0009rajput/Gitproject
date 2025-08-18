import mongoose from "mongoose";
import { Schema } from "mongoose";

const paymentSchema = new Schema({
    razorpay_order_id: {
        type: String,
        required: true
    },
    razorpay_payment_id: {
        type: String,
        required: true
    },
    razorpay_signature: {

        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});
export default mongoose.model('Payment', paymentSchema);