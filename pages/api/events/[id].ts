import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Helper function to read events from the JSON file
const getEventsFromFile = () => {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  try {
    return JSON.parse(fileContents);
  } catch (err) {
    return [];
  }
};

// Helper function to write events to the JSON file
const saveEventsToFile = (events: any[]) => {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  let events = getEventsFromFile();

  switch (method) {
    case 'GET':
      const event = events.find((event: { id: number; }) => event.id === Number(id));
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
      break;
    case 'PUT':
      const index = events.findIndex((event: { id: number; }) => event.id === Number(id));
      if (index !== -1) {
        events[index] = { ...events[index], ...req.body };
        saveEventsToFile(events);
        res.status(200).json(events[index]);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
      break;
    case 'DELETE':
      events = events.filter((event: { id: number; }) => event.id !== Number(id));
      saveEventsToFile(events);
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
