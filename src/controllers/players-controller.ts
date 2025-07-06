import { Request, Response } from "express"
import { getPlayersService, getPlayerByIdService, insertPlayerService } from "../services/players-service"
export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayersService();
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async(req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const insertPlayer = async(req: Request, res: Response) => {
  const player = req.body
  const httpResponse = await insertPlayerService(player);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}