import * as HttpResponse from "../utils/http-helper"
import { getClubs } from "../repositories/clubs-repository";

export const getClubsService = async() =>{
  const clubs = await getClubs();
  let response = null;

  if(clubs.length !== 0){
    response = HttpResponse.ok(clubs);
  }else{
    response = HttpResponse.badRequest();
  }
  return response;
}