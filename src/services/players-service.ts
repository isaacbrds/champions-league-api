import { findAllPlayers } from "../repositories/players-repository";
import { ok, noContent } from "../utils/http-helper"

export const getPlayersService = async()=>{
  const data = await findAllPlayers();
  let response = null;
  if(data){
    response = await ok(data);
  }else{
    response = await noContent();
  }
  return response;
}