// pages/api/date.js

export default function handler(req, res) {
  const currentDate = new Date();
  res.status(200).json({ date: currentDate.toISOString() });
}
