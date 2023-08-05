import { Router } from "express";
import { getUsers,saveUser,updateUser,deleteUser } from "../controllers/AuthController";

const router = Router();

router.get("/", getUsers);
router.post("/", saveUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

export { router };
