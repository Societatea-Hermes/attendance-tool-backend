import { Request, Response } from 'express';
import { Session } from '../models/sessionModel';
import database from '../Database';

const sessions: Session[] = [];

export const addSession = (req: Request, res: Response) => {
  const { name, date } = req.body;

  if (!name || !date) {
    return res.status(400).json({ error: 'Name and date are required' });
  }

  const newSession = new Session(name, date);
  database.run('INSERT INTO sessions (name, date) VALUES (?, ?)', [newSession.getName(), newSession.getDate()], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to add session to the database' });
    }
  //newSession.id = this.lastID;
  return res.status(201).json(newSession);
});
}