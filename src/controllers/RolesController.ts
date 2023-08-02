import { Request, Response } from "express";
import {
  getRoles as getResult,
  getRoleById as getResultbyId,
  saveRole as saveResult,
  deleteRole as deleteResult,
  updateRole as updateResult,
} from "../services/RolesService";

const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await getResult();
    res.send({ roles });
  } catch (e) {
    console.log(`Error: ${e}`);
    res.send({ message: "Ha ocurrido un problema." });
  }
};

const getRoleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const getRole = await getResultbyId(id);
    res.send(getRole);
  } catch (e) {
    console.log(`Error: ${e}`);
    res.send({ message: "Ha ocurrido un problema." });
  }
};

const saveRole = async (req: Request, res: Response) => {
  try {
    const { role, areas } = req.body;
    console.log(role, areas);
    const newRole = await saveResult(role, areas);
    res.send(newRole);
  } catch (e) {
    console.log(`Error: ${e}`);
    res.send({ message: "Ha ocurrido un problema." });
  }
};

const deleteRole = async (req: Request, res: Response) => {
  try {
    const { role } = req.body; //obtener el id del artícul; //convertir el id a un número
    const deletedRole = await deleteResult(role);
    res.send({
      deletedRole,
    });
  } catch (e) {
    console.log(`Error: ${e}`);
    res.send({ message: "Ha ocurrido un problema." });
  }
};

const updateRole = async (req: Request, res: Response) => {
  try {
    const { role,areas } = req.body; //obtener el id del artículo
    const updatedRole = await updateResult(role,areas);
    res.send({
      updatedRole,
    });
  } catch (e) {
    console.log(`Error: ${e}`);
    res.send({ message: "Ha ocurrido un problema." });
  }
};

export { getRoles, saveRole, deleteRole, updateRole, getRoleById };
