import {Router} from "express";
import { getAreas, saveArea, deleteArea, updateArea } from "../controllers/AreaController"

const router = Router();

router.get("/", getAreas);
router.post("/", saveArea);
router.put("/", updateArea)
router.delete("/",deleteArea);

export {router};