import express from "express";
const router = express.Router();
import {
    addRoom,
    getRoomById,
    getRooms,
} from "../controllers/roomController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addRoom).get(protect, admin, getRooms);
router.route("/:id").get(protect, getRoomById);

export default router;