import { Request, Response } from "express";
import {
  getUsers as getResult,
  saveUser as saveResult,
} from "../services/AuthService";

const getUsers = async (req: Request, res: Response) => {

    res.send({ message: "Todo ok" });

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

export { getUsers, saveUser };
