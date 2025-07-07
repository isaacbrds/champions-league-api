import PlayerModel from "../models/player-model";
import { deletePlayer, findAllPlayers, findPlayer, insertPlayer, updatePlayer } from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper"

export const getPlayersService = async()=>{
  const data = await findAllPlayers();
  let response = null;
  if(data){
    response = await HttpResponse.ok(data);
  }else{
    response = await HttpResponse.noContent();
  }
  return response;
}

export const getPlayerByIdService = async(id: number) => {
  const data = await findPlayer(id);
  let response = null;
  if(data){
    response = await HttpResponse.ok(data);
  }else{
    response = await HttpResponse.noContent();
  }
  return response;
}

export const insertPlayerService = async(data: PlayerModel) => {
  let response = null;
  if(Object.keys(data).length > 0 ){
    await insertPlayer(data);
    response = await HttpResponse.created();
  }else{
    response = await HttpResponse.badRequest();
  }
  return response;
}

export const deletePlayerService = async(id: number) => {
  let player = await deletePlayer(id);
  let response = null;
  
  if(player !== null){
    response = await HttpResponse.noContent();
  }else{
    response = await HttpResponse.badRequest();
  }

  return response;
}

export const updatePlayerService = async(id: number, player: PlayerModel) => {
  let response = await updatePlayer(id, player);
  
  if( response ){
    response = await HttpResponse.ok({ message: "Player updated succeful" });
  }else{
    response = await HttpResponse.badRequest();
  }

  return response;
}