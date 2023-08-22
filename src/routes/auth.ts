import { Router } from "express";
import checkAuth from "../middleware/AuthMiddleware";
import {
  login,
  getUsers,
  saveUser,
  updateUser,
  deleteUser,
} from "../controllers/AuthController";

const router = Router();
router.post("/login", login);
router.get("/", checkAuth, getUsers);
router.post("/", checkAuth,saveUser);
router.put("/",checkAuth, updateUser);
router.delete("/",checkAuth, deleteUser);
//router.delete("/", checkAuth, deleteUser);

export { router };
