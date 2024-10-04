import { Request, Response } from 'express';
import data from '../23-taller-04-datos.json'; 

export const getUsersByHobby = (req: Request, res: Response) => {
  const { hobby } = req.params; 
  const usersWithHobby = data.filter(user => user.hobbies.includes(hobby));

  if (usersWithHobby.length > 0) {
      res.json(usersWithHobby); 
  } else {
      res.status(404).json({ message: 'No se encontraron usuarios con ese hobby' }); 
  }
};

export const userExists = (req: Request, res: Response) => {
  const { id } = req.params; 
  const user = data.find(user => user.id === parseInt(id)); 

  if (user) {
      res.json({ exists: true }); 
  } else {
      res.json({ exists: false }); 
  }
};

export const getTeamExperience = (req: Request, res: Response) => {
  const { team } = req.params; 
  const teamMembers = data.filter(user => user.team === team); 

  if (teamMembers.length > 0) {
      const totalExperience = teamMembers.reduce((total, user) => total + user.years, 0); 
      res.json({ team, totalExperience }); 
  } else {
      res.status(404).json({ message: 'No se encontraron miembros para ese equipo' }); 
  }
};

export const getPilotsByFaction = (req: Request, res: Response) => {
  const { faction } = req.params; 
  const pilotsInFaction = data.filter(user => user.faction.toLowerCase() === faction.toLowerCase()); 

  if (pilotsInFaction.length > 0) {
      res.json(pilotsInFaction); 
  } else {
      res.status(404).json({ message: 'No se encontraron pilotos para esa facción' }); 
  }
};

const users = [{ id: 1, name: "Robin Restrepo", carrera: "Psicologia" }];

export const registerUser = (req: Request, res: Response) => {
  const { name, carrera } = req.body; 

  if (!name || !carrera) {
      return res.status(400).json({ message: "Nombre y carrera son requeridos" }); 
  }

  
  const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

  const newUser = { id: newId, name, carrera }; 
  users.push(newUser); 

  res.status(201).json(newUser); 
};