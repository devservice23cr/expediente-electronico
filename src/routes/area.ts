import { Router } from "express";
import checkAuth from "../middleware/AuthMiddleware";
import {
  getAreas,
  saveArea,
  deleteArea,
  updateArea,
} from "../controllers/AreaController";

const router = Router();

router.get("/", checkAuth, getAreas);
router.post("/", checkAuth, saveArea);
router.put("/", checkAuth, updateArea);
router.delete("/", checkAuth, deleteArea);
export { router };
