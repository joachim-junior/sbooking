import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
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
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    ammenities: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
});

const Room = mongoose.model("Room", roomSchema);

export default Room;