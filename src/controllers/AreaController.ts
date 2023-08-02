import { Request, Response } from "express";
import {
  getAreas as getResult,
  saveArea as saveResult,
  deleteArea as deleteResult,
  updateArea as updateResult,
} from "../services/AreaService";

const getAreas = async (req: Request, res: Response) => {
  try {
    const areas = await getResult();
    res.send({ areas });
  } catch (e) {
    console.log(`Error: ${e}`);
    res.send({ message: "Ha ocurrido un problema." });
  }
};

const saveArea = async (req: Request, res: Response) => {
  try {
    const { area } = req.body;
    const newArea = await saveResult(area);
    res.send({ newArea });
  } catch (e) {
    console.log(`Error: ${e}`);
    res.send({ message: "Ha ocurrido un problema." });
  }
};

const deleteArea = async (req: Request, res: Response) => {
  try {
    const { area } = req.body; //obtener el id del artícul; //convertir el id a un número
    const deletedArea = await deleteResult(area);
    res.send({
      deletedArea,
    });
  } catch (e) {
    console.log(`Error: ${e}`);
    res.send({ message: "Ha ocurrido un problema." });
  }
};

const updateArea = async (req: Request, res: Response) => {
  try {
    const { area } = req.body; //obtener el id del artículo
    const updatedArea = await updateResult(area);
    res.send({
      updatedArea,
    });
  } catch (e) {
    console.log(`Error: ${e}`);
    res.send({ message: "Ha ocurrido un problema." });
  }
};

export { getAreas, saveArea, deleteArea, updateArea };
