import { Request, Response } from "express";
import {
  getUsers as getResult,
  saveUser as saveResult,
  updateUser as updateResult,
  deleteUser as deleteResult,
} from "../services/AuthService";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getResult();
    res.send({ users });
  } catch (e) {
    console.log(`Error: ${e}`); // Error: Something went wrong
    res.send({ message: "Ha ocurrido un problema." });
  }
};

const saveUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const newUser = await saveResult(user);
    res.send({ newUser });
  } catch (e) {
    console.log(`Error: ${e}`); // Error: Something went wrong
    res.send({ message: "Ha ocurrido un problema." });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const newUser = await updateResult(user);
    res.send({ newUser });
  }
  catch (e) {
    console.log(`Error: ${e}`); // Error: Something went wrong
    res.send({ message: "Ha ocurrido un problema." });
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const deleted = await deleteResult(user.id);
    res.send(deleted);
  }
  catch (e) {
    console.log(`Error: ${e}`); // Error: Something went wrong
    res.send({ message: "Ha ocurrido un problema." });
  }
}
  


export { getUsers, saveUser, updateUser, deleteUser };
