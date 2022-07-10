import express from "express";
const router = express.Router();
import {
    getHotels,
    getHotelById,
    deleteHotel,
    createHotel,
    updateHotel,
    createHotelReview,
    getTopHotels,
    singleUpload,
    multipleUpload,
} from "../controllers/hotelController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/hotelMiddleware.js";

router.route("/").get(getHotels).post(protect, admin, createHotel);
router.route("/:id/reviews").post(protect, createHotelReview);
router.get("/top", getTopHotels);
router
    .route("/:id")
    .get(getHotelById)
    .delete(protect, admin, deleteHotel)
    .put(protect, admin, updateHotel);
router.post(
    "/singleUpload/", [protect, admin, upload.single("image")],
    singleUpload
);
router.post(
    "/multipleUpload/", [protect, admin, upload.array("images", 12)],
    multipleUpload
);
export default router;