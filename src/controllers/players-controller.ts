import { Request, Response } from "express"
import { getPlayersService, getPlayerByIdService, insertPlayerService, deletePlayerService, updatePlayerService } from "../services/players-service"
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

export const deletePlayer = async(req: Request, res: Response)=>{
  const id = parseInt(req.params.id);
  const httpResponse = await deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async(req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const player = req.body
  const httpResponse = await updatePlayerService(id, player);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}