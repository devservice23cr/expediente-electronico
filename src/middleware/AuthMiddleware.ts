import { Request, Response } from "express";
import { verifyToken } from "../utils/HandleToken";
import { handleErrorResponse, handleHttpError } from "../utils/HandleResponses";

const checkAuth = async (req: Request, res: Response, next: any) => {
  try {
    if (!req.headers.authorization) {
      handleErrorResponse(res, "Not found token");
    } else {
      const token = req.headers.authorization.split(" ").pop();

      const tokenData: any = await verifyToken(token);
      if (tokenData?.id) {
        next();
      } else {
        handleErrorResponse(res, "Invalid token");
      }
    }
  } catch (e) {
    handleHttpError(res, e);
  }
};

export default checkAuth;
