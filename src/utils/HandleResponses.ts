import { Response } from "express";
import { ResponseCodes } from "../constants/ResponseCodes";
export const handleHttpError = (res: Response, error: any) => {

  res.status(ResponseCodes.INTERNAL_SERVER_ERROR);
  res.send({ error: "ERROR" });
};

export const handleErrorResponse = (
  res: Response,
  message = "Algo ocurrio",
  code = ResponseCodes.UNAUTHORIZED
) => {
 
  res.status(code);
  res.send({ error: message });
};

export const handleSuccessResponse = (  
  res: Response,
  data: any,
  code = ResponseCodes.SUCCESS
) => {
  res.status(code);
  res.send(data);
};