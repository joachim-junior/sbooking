import mongoose from "mongoose";

const HotelSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    lattitude: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    gallery: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    policy: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Hotel = mongoose.model("Hotel", HotelSchema);

export default Hotel;