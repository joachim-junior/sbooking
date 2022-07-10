import asyncHandler from "express-async-handler";
import Booking from "../models/bookingModel.js";

// @desc    Create newbooking
// @route   POST /api/bookings
// @access  Private
const addRoom = asyncHandler(async(req, res) => {
    const {
        bookingItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (bookingItems && bookingItems.length === 0) {
        res.status(400);
        throw new Error("No order items");
        return;
    } else {
        const booking = new Booking({
            bookingItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        const createdBooking = await booking.save();

        res.status(201).json(createdOrder);
    }
});

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
// @access  Private
const getRoomById = asyncHandler(async(req, res) => {
    const booking = await Booking.findById(req.params.id).populate(
        "user",
        "name email"
    );

    if (booking) {
        res.json(booking);
    } else {
        res.status(404);
        throw new Error("Booking not found");
    }
});

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private/Admin
const getRooms = asyncHandler(async(req, res) => {
    const bookings = await Booking.find({}).populate("user", "id name");
    res.json(bookings);
});

export { addRoom, getRoomById, getRooms };