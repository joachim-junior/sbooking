import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Hotel",
    },
    // orderItems: [{
    //     name: { type: String, required: true },
    //     qty: { type: Number, required: true },
    //     image: { type: String, required: true },
    //     price: { type: Number, required: true },
    //     product: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         required: true,
    //         ref: "Product",
    //     },
    // }, ],
    // shippingAddress: {
    //     address: { type: String, required: true },
    //     city: { type: String, required: true },
    //     postalCode: { type: String, required: true },
    //     country: { type: String, required: true },
    // },
    price: {
        type: Number,
        required: true,
    },
    roomType: {
        type: String,
        required: true,
    },
    adults: {
        type: Number,
        required: true,
    },
    checkin: {
        type: Date,
    },
    checkout: {
        type: Date,
    },
}, {
    timestamps: true,
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;