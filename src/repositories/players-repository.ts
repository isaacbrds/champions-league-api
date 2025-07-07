
import  PlayerModel  from "../models/player-model";
const data = [
  {
    "id": 1,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "nationality": "French",
    "position": "Forward",
    "statistics": {
      "overall": 92,
      "pace": 97,
      "shooting": 90,
      "passing": 81,
      "dribbling": 93,
      "defending": 40,
      "physical": 78
    }
  },
  {
    "id": 2,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norwegian",
    "position": "Forward",
    "statistics": {
      "overall": 92,
      "pace": 90,
      "shooting": 94,
      "passing": 68,
      "dribbling": 79,
      "defending": 45,
      "physical": 90
    }
  },
  {
    "id": 3,
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "nationality": "English",
    "position": "Midfielder",
    "statistics": {
      "overall": 91,
      "pace": 80,
      "shooting": 85,
      "passing": 84,
      "dribbling": 91,
      "defending": 78,
      "physical": 86
    }
  },
  {
    "id": 4,
    "name": "Vinícius Júnior",
    "club": "Real Madrid",
    "nationality": "Brazilian",
    "position": "Forward",
    "statistics": {
      "overall": 91,
      "pace": 96,
      "shooting": 84,
      "passing": 79,
      "dribbling": 94,
      "defending": 32,
      "physical": 72
    }
  }
]
export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return data;
}

export const findPlayer = async (id: number): Promise<PlayerModel | undefined> => {
  return data.find(player=> player.id === id);
}

export const insertPlayer = async(player: PlayerModel) => {
  data.push(player);
  return null;
}

export  const deletePlayer = async(id: number): Promise<PlayerModel | null> => {
  const index = data.findIndex(player => player.id === id);
  
  if(index !== -1){
    const playerDeleted: PlayerModel  = data.splice(index, 1)[0];
    return playerDeleted;
  }

  return null;
}

export const updatePlayer = async(id: number, player: any) => {
  let index = data.findIndex(player => player.id === id);
  if(index !== -1){
    data[index] = player;
    return player;
  }else{
    return null;
  }
}