interface PlayerModel{
  id: number;
  name: string;
}

const data = [{
    id:1,
    name: "Lionel Messi"
  },{
    id:2,
    name: "Cristiano Ronaldo"
  },
]
export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return data;
}

export const findPlayer = async (id: number): Promise<PlayerModel | undefined> => {
  return data.find(player=> player.id === id);
}