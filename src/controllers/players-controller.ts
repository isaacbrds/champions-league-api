import { Request, Response } from "express"
import { getPlayersService } from "../services/players-service"
export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayersService();
  res.status(httpResponse.statusCode).json(httpResponse.body)
}