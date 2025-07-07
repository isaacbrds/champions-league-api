import { Router } from "express";
import { getPlayer, getPlayerById, insertPlayer, deletePlayer, updatePlayer} from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router()

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerById);
router.delete("/players/:id", deletePlayer);
router.put("/players/:id", updatePlayer);
router.post("/players", insertPlayer);


router.get("/clubs", getClubs);
export default router;