import { Request, Response } from "express";
import {
  getAreas as getResult,
  saveArea as saveResult,
  deleteArea as deleteResult,
  updateArea as updateResult,
} from "../services/AreaService";
import {
  handleSuccessResponse,
  handleHttpError,
} from "../utils/HandleResponses";

const getAreas = async (req: Request, res: Response) => {
  try {
    const areas = await getResult();
    handleSuccessResponse(res, { areas });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const saveArea = async (req: Request, res: Response) => {
  try {
    const { area } = req.body;
    const newArea = await saveResult(area);

    handleSuccessResponse(res, { newArea });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const deleteArea = async (req: Request, res: Response) => {
  try {
    const { area } = req.body; //obtener el id del artícul; //convertir el id a un número
    const deletedArea = await deleteResult(area);

    handleSuccessResponse(res, { deletedArea });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const updateArea = async (req: Request, res: Response) => {
  try {
    const { area } = req.body; 
    const updatedArea = await updateResult(area);

    handleSuccessResponse(res, { updatedArea });
  } catch (e) {
    handleHttpError(res, e);
  }
};

export { getAreas, saveArea, deleteArea, updateArea };
