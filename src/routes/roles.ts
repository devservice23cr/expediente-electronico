import { Router } from "express";
import {
  getRoles,
  saveRole,
  deleteRole,
  updateRole,
  getRoleById,
} from "../controllers/RolesController";

const router = Router();

router.get("/", getRoles);
router.get("/getbyid", getRoleById);
router.post("/", saveRole);
router.put("/", updateRole);
router.delete("/", deleteRole);
export { router };
