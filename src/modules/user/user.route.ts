import express from "express";
import { userController } from "./user.controller.js";

const router = express.Router();

router.get("/", userController.getUsers);

export default router;
