
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
  },
  {
    "id": 5,
    "name": "Phil Foden",
    "club": "Manchester City",
    "nationality": "English",
    "position": "Midfielder",
    "statistics": {
      "overall": 90,
      "pace": 84,
      "shooting": 86,
      "passing": 87,
      "dribbling": 92,
      "defending": 60,
      "physical": 68
    }
  },
  {
    "id": 6,
    "name": "Harry Kane",
    "club": "Bayern Munich",
    "nationality": "English",
    "position": "Forward",
    "statistics": {
      "overall": 90,
      "pace": 70,
      "shooting": 95,
      "passing": 86,
      "dribbling": 83,
      "defending": 49,
      "physical": 84
    }
  },
  {
    "id": 7,
    "name": "Jamal Musiala",
    "club": "Bayern Munich",
    "nationality": "German",
    "position": "Midfielder",
    "statistics": {
      "overall": 89,
      "pace": 85,
      "shooting": 82,
      "passing": 83,
      "dribbling": 94,
      "defending": 55,
      "physical": 66
    }
  },
  {
    "id": 8,
    "name": "Virgil van Dijk",
    "club": "Liverpool",
    "nationality": "Dutch",
    "position": "Defender",
    "statistics": {
      "overall": 89,
      "pace": 81,
      "shooting": 60,
      "passing": 71,
      "dribbling": 70,
      "defending": 91,
      "physical": 86
    }
  },
  {
    "id": 9,
    "name": "Rodri",
    "club": "Manchester City",
    "nationality": "Spanish",
    "position": "Midfielder",
    "statistics": {
      "overall": 89,
      "pace": 65,
      "shooting": 78,
      "passing": 86,
      "dribbling": 82,
      "defending": 85,
      "physical": 84
    }
  },
  {
    "id": 10,
    "name": "Lamine Yamal",
    "club": "FC Barcelona",
    "nationality": "Spanish",
    "position": "Forward",
    "statistics": {
      "overall": 87,
      "pace": 91,
      "shooting": 80,
      "passing": 82,
      "dribbling": 93,
      "defending": 45,
      "physical": 65
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