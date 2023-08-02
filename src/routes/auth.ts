import { Router } from "express";
import { getUsers,saveUser } from "../controllers/AuthController";

const router = Router();

router.get("/", getUsers);
router.post("/", saveUser);

export { router };
