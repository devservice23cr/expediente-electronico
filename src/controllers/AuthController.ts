import { Request, Response } from "express";
import {
  getUsers as getResult,
  saveUser as saveResult,
  updateUser as updateResult,
  deleteUser as deleteResult,
  login as loginResult,
} from "../services/AuthService";
import {
  handleSuccessResponse,
  handleHttpError,
  handleErrorResponse,
} from "../utils/HandleResponses";

const login = async (req: Request, res: Response) => {
  try {

    const { user } = req.body;
    const  SessionInformation = await loginResult(user); 
    if (SessionInformation != null) {
      handleSuccessResponse(res, { SessionInformation });
    } else {
      handleErrorResponse(res, "Usuario o contraseña incorrectos");
    }
  } catch (e) {
    handleHttpError(res, e);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getResult();
    handleSuccessResponse(res, { users });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const saveUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const newUser = await saveResult(user);
    handleSuccessResponse(res, { newUser });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const newUser = await updateResult(user);
    handleSuccessResponse(res, { newUser });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const userDeleted = await deleteResult(user.id);
    handleSuccessResponse(res, { userDeleted });
  } catch (e) {
    handleHttpError(res, e);
  }
};

export { getUsers, saveUser, updateUser, deleteUser, login };
