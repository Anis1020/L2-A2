import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUser);
router.get("/:id", userController.getSingleUser);
router.delete("/:userId", userController.deleteAUser);

export const userRouter = router;
