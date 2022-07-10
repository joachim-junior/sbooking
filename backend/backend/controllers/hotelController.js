import asyncHandler from "express-async-handler";
import Hotel from "../models/hotelModel.js";

// @desc    Fetch all Hotels
// @route   GET /api/Hotels
// @access  Public
const getHotels = asyncHandler(async(req, res) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword ?
        {
            name: {
                $regex: req.query.keyword,
                $options: "i",
            },
        } :
        {};

    const count = await Hotel.countDocuments({...keyword });
    const Hotels = await Hotel.find({...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1));

    res.json({ Hotels, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single Hotel
// @route   GET /api/Hotels/:id
// @access  Public
const getHotelById = asyncHandler(async(req, res) => {
    const Hotel = await Hotel.findById(req.params.id);

    if (Hotel) {
        res.json(Hotel);
    } else {
        res.status(404);
        throw new Error("Hotel not found");
    }
});

// @desc    Delete a Hotel
// @route   DELETE /api/Hotels/:id
// @access  Private/Admin
const deleteHotel = asyncHandler(async(req, res) => {
    const Hotel = await Hotel.findById(req.params.id);

    if (Hotel) {
        await Hotel.remove();
        res.json({ message: "Hotel removed" });
    } else {
        res.status(404);
        throw new Error("Hotel not found");
    }
});

// @desc    Create a Hotel
// @route   POST /api/Hotels
// @access  Private/Admin
const createHotel = asyncHandler(async(req, res) => {
    const {
        name,
        price,
        ammeneties,
        city,
        state,
        phone,
        email,
        longitude,
        lattitude,
        description,
        note,
        checkin,
        checkout,
        policy,
        image,
        gallery,
        rooms,
    } = req.body;

    const hotel = new Hotel({
        name,
        price,
        user: req.user._id,
        ammeneties,
        city,
        image,
        gallery,
        policy,
        note,
        checkin,
        checkout,
        description,
        lattitude,
        longitude,
        email,
        state,
        phone,
    });
    await hotel.save();
    res.status(201).send({ message: "Hotel added successfully" });
});

// @desc    Update a Hotel
// @route   PUT /api/Hotels/:id
// @access  Private/Admin
const updateHotel = asyncHandler(async(req, res) => {
    const {
        name,
        price,
        city,
        state,
        phone,
        email,
        longitude,
        lattitude,
        description,
        note,
        checkin,
        checkout,
        policy,
        rooms,
    } = req.body;

    const hotel = await Hotel.findById(req.params.id);

    if (Hotel) {
        Hotel.name = name;
        Hotel.price = price;
        Hotel.description = description;
        Hotel.city = city;
        Hotel.state = state;
        Hotel.phone = phone;
        Hotel.email = email;
        Hotel.checkin = checkin;
        Hotel.checkout = checkout;
        Hotel.policy = policy;
        Hotel.longitude = longitude;
        Hotel.lattitude = lattitude;
        Hotel.rooms = rooms;
        Hotel.note = note;

        const updatedHotel = await hotel.save();
        res.json(updatedHotel);
    } else {
        res.status(404);
        throw new Error("Hotel not found");
    }
});

// @desc    Create new review
// @route   POST /api/Hotels/:id/reviews
// @access  Private
const createHotelReview = asyncHandler(async(req, res) => {
    const { rating, comment } = req.body;

    const Hotel = await Hotel.findById(req.params.id);

    if (Hotel) {
        const alreadyReviewed = Hotel.reviews.find(
            (r) => r.user.toString() === req.user._id.toString()
        );

        if (alreadyReviewed) {
            res.status(400);
            throw new Error("Hotel already reviewed");
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        };

        Hotel.reviews.push(review);

        Hotel.numReviews = Hotel.reviews.length;

        Hotel.rating =
            Hotel.reviews.reduce((acc, item) => item.rating + acc, 0) /
            Hotel.reviews.length;

        await Hotel.save();
        res.status(201).json({ message: "Review added" });
    } else {
        res.status(404);
        throw new Error("Hotel not found");
    }
});

// @desc    Get top rated Hotels
// @route   GET /api/Hotels/top
// @access  Public
const getTopHotels = asyncHandler(async(req, res) => {
    const Hotels = await Hotel.find({}).sort({ rating: -1 }).limit(3);
    res.json(Hotels);
});

// @desc    Get top rated Hotels
// @route   GET /api/Hotels/top
// @access  Private

const singleUpload = (req, res) => {
    return res.status(200).send({ image: req.file.filename });
};

const multipleUpload = (req, res) => {
    return res.status(200).send({ images: req.files });
};

export {
    getHotels,
    getHotelById,
    deleteHotel,
    createHotel,
    updateHotel,
    createHotelReview,
    getTopHotels,
    singleUpload,
    multipleUpload,
};