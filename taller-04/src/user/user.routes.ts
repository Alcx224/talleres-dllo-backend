import { Router} from "express";
import { getUsersByHobby, userExists, getTeamExperience, getPilotsByFaction, registerUser } from './user.controller';
// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINTS

userRoutes.get('/exists/:id', userExists);
userRoutes.get('/hobby/:hobby', getUsersByHobby);
userRoutes.get('/team-experience/:team', getTeamExperience);
userRoutes.get('/by-faction/:faction', getPilotsByFaction);
userRoutes.post('/',registerUser); 
export default userRoutes;
